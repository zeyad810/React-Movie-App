/* eslint-disable react/prop-types */
function MovieCard({ movie, onClick }) {
  return (
    <div
      className="bg-dark-100 shadow-light-100/10 shadow-inner; cursor-pointer rounded-2xl p-5 transition-all duration-500 hover:scale-95"
      onClick={onClick}
    >
      <img
        className="h-auto w-full rounded-lg"
        src={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w500/${movie.poster_path} `
            : `/no-movie.png`
        }
        alt=""
      />
      <div className="mt-4">
        <h3 className="line-clamp-1 text-base font-bold text-white">
          {movie.title}
        </h3>
        <div className="mt-2 flex flex-row flex-wrap items-center gap-2">
          <div className="flex flex-row items-center gap-1">
            <img
              className="size-4 object-contain"
              src="/star.svg"
              alt=""
            />
            <p className="text-base font-bold text-white">
              {movie.vote_average ? movie.vote_average.toFixed(1) : "N/A"}
            </p>
          </div>
          <span className="text-sm text-gray-100">•</span>
          <p className="text-base font-medium text-gray-100 capitalize">
            {movie.original_language}
          </p>
          <span className="text-sm text-gray-100">•</span>
          <p className="text-base font-medium text-gray-100">
            {" "}
            {movie.release_date ? movie.release_date.split("-")[0] : "N/A"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
