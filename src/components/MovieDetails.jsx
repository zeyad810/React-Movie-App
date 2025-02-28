import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import PageNotFound from "./PageNotFound";
import Spinner from "./Spinner";

function MovieDetails() {
  const API_BASE_URL = "https://api.themoviedb.org/3";
  const API_KEY =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YWY4N2QyNDUyMDYzMjg2ZTExZGM5ZmM2MTc2YjdiZSIsIm5iZiI6MTc0MDUwODQxNS4zODUsInN1YiI6IjY3YmUwY2ZmZDQ5YjJmNWQ1NzNkMmViZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WLjtn_MTVALtru8PfeZ_JTuRSkue5LtG8i6RJMgTUMo";

  const API_OPTIONS = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
  };

  const [movie, setMovie] = useState(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();

  async function fetchMovieDetail() {
    setIsLoading(true);
    setError("");

    try {
      const endPoint = `${API_BASE_URL}/movie/${id}?language=en-US`;
      const response = await fetch(endPoint, API_OPTIONS);

      if (!response.ok) {
        throw new Error("Failed to fetch movie details");
      }

      const data = await response.json();
      setMovie(data);
    } catch (error) {
      console.error(`Error fetching movie details: ${error.message}`);
      setError("Error fetching movie details");
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchMovieDetail();
  }, [id]);

  if (isLoading) return <Spinner />;
  if (error) return <p className="text-red-500">{<PageNotFound />}</p>;
  if (!movie) return <p className="text-white">No movie found.</p>;

  return (
    <section className="p-12 text-white max-sm:p-0">
      <div className="bg-dark-100 overflow-auto rounded-4xl p-2 px-6 shadow-lg shadow-[#AB8BFF] max-sm:p-0">
        <div className="flex items-center justify-between p-8 pb-6">
          <h2 className="md:text-4xl">{movie.title}</h2>
          <span className="bg-dark flex flex-wrap items-center rounded-md px-3 py-2">
            <img src="/star.svg" alt="" className="px-1" />
            {movie.vote_average?.toFixed(1)}
            <span className="text-gray-100">
              / 10 ({movie.vote_count?.toString().slice(0, 3)}K)
            </span>
          </span>
        </div>
        <p className="text-light-100 px-8 pb-2">
          {movie.release_date}
          <span className="px-1.5 text-sm text-gray-100 max-sm:text-xs">
            •{" "}
          </span>
          {movie.runtime} Min 🕐
        </p>
        <div className="flex flex-col flex-wrap items-center justify-center gap-8 px-8 py-8 max-lg:items-center max-md:flex-col max-md:items-center max-sm:text-xs">
          <div>
            <img
              className="h-[530px] w-full rounded-lg object-contain"
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                  : "/no-movie.png"
              }
              alt={movie.title}
            />
          </div>
          <div className="space-y-3">
            <p className="text-light-100 flex w-full items-center gap-8 text-lg">
              <span className="w-[150px]">Genres</span>
              <span className="flex w-full flex-wrap">
                {movie.genres?.map((genre) => (
                  <span
                    key={genre.id}
                    className="bg-dark mx-1.5 my-1.5 inline-flex items-center rounded-md px-3 py-2 text-white"
                  >
                    {genre.name}
                  </span>
                ))}
              </span>
            </p>
            <p className="text-light-100 flex w-full items-center gap-8 py-2 text-lg">
              <span className="w-[150px]">OverView</span>
              <span className="w-full max-sm:text-xs">{movie.overview}</span>
            </p>
            <p className="text-light-100 flex w-full items-center gap-8 py-2 text-lg">
              <span className="w-[150px]">Release Date</span>
              <span className="w-full">{movie.release_date}</span>
            </p>
            <p className="text-light-100 flex w-full items-center gap-8 py-2 text-lg">
              <span className="w-[150px]">Status</span>
              <span className="w-full">{movie.status}</span>
            </p>
            <p className="text-light-100 flex w-full items-center gap-8 py-2 text-lg">
              <span className="w-[150px]">Budget</span>
              <span className="w-full">
                {movie.budget?.toLocaleString()} USD
              </span>
            </p>
            <p className="text-light-100 flex w-full items-center gap-8 py-2 text-lg">
              <span className="w-[150px]">Revenue</span>
              <span className="w-full">
                {movie.revenue?.toLocaleString()} USD
              </span>
            </p>
            <p className="text-light-100 flex w-full items-center gap-8 py-2 text-lg">
              <span className="w-[150px]">Companies</span>
              <span className="w-full max-sm:text-xs">
                {movie.production_companies.map((company) => (
                  <span key={company.id}>
                    {company.name}{" "}
                    <span className="text-sm text-gray-100"> • </span>
                  </span>
                ))}
              </span>
            </p>
            <p className="text-light-100 flex w-full items-center gap-8 py-2 text-lg">
              <span className="w-[150px]">Languages</span>
              <span className="w-full max-sm:text-xs">
                {movie.spoken_languages.map((company) => (
                  <span key={company.id}>
                    {company.name}{" "}
                    <span className="text-sm text-gray-100"> • </span>
                  </span>
                ))}
              </span>
            </p>
            <p className="text-light-100 flex w-full items-center gap-8 py-2 text-lg">
              <span className="w-[150px]">Countries</span>
              <span className="w-full max-sm:text-xs">
                {movie.production_countries.map((company) => (
                  <span key={company.id}>
                    {company.name}{" "}
                    <span className="text-sm text-gray-100"> • </span>
                  </span>
                ))}
              </span>
            </p>
          </div>
        </div>
        <div className="pb-4 text-center">
          <Link
            to="/"
            className="bg-light-100 hover:bg-light-200 hover:ring-light-100 inline-block cursor-pointer rounded-full px-4 py-3 text-center text-sky-950 capitalize transition-colors duration-500 hover:ring hover:ring-offset-2 focus:outline-0"
          >
            Go To Home Page
          </Link>
        </div>
      </div>
    </section>
  );
}

export default MovieDetails;
