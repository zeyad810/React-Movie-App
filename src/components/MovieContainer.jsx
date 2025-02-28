/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import MovieCard from "./MovieCard";

function MovieContainer({ movieList }) {
  const navigate = useNavigate();
  return (
    <ul className="xs:grid-cols-2 grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-4">
      {movieList.map((movie) => (
        <MovieCard
          onClick={() => navigate(`/movie/${movie.id}`)}
          key={movie.id}
          movie={movie}
        />
      ))}
    </ul>
  );
}

export default MovieContainer;
