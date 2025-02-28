import Header from "./Header";
import Search from "./Search";
import MovieContainer from "./MovieContainer";
import Loading from "./Spinner";
import { useEffect, useState } from "react";
import { useDebounce } from "react-use";

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

function HomePage({ movieID, setMovieID }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [movieList, setMovieList] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");
  useDebounce(() => setDebouncedSearchTerm(searchTerm), 1000, [searchTerm]);
  async function fetchMovie(query = "") {
    setIsLoading(true);

    setError("");
    try {
      // const endPoint = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US

      const endPoint = query
        ? `${API_BASE_URL}/search/movie?query=${query}`
        : `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;
      const response = await fetch(endPoint, API_OPTIONS);
      if (!response.ok) {
        throw new Error("failed to fetch movies");
      }
      const data = await response.json();
      if (data.Response === "False") {
        setError("No movies found");
        setMovieList([]);
        return;
      }
      setMovieList(data.results || []);
    } catch (error) {
      console.error(`Error with Fetching the Movies ${error} `);
      setError("Error with Fetching the Movies");
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(
    function () {
      fetchMovie(debouncedSearchTerm);
    },
    [debouncedSearchTerm],
  );
  return (
    <main className="bg-primary relative min-h-screen">
      <div className="bg-hero-pattern z-0; absolute h-screen w-full bg-cover bg-center" />
      <div className="xs:p-0 relative z-10 mx-auto flex max-w-7xl flex-col px-5 py-8">
        <Header>
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </Header>
        <section className="space-y-9 py-12">
          <h2 className="my-[40px]"> ALL Movies </h2>

          {isLoading ? (
            <Loading />
          ) : error ? (
            <p className="text-red-500">{error}</p>
          ) : (
            <MovieContainer movieList={movieList} setMovieID={setMovieID} />
          )}
        </section>
      </div>
    </main>
  );
}

export default HomePage;
