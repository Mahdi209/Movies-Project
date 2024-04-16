import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <Link className="flex-shrink-0" to={`/movies/${movie.id}`}>
      <img
        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
        alt={movie.title}
        className=" w-36 lg:w-96 h-auto bg-gray-200 mr-16 hover:opacity-55 hover:transition-all"
      />
      <span className="text-white  text-[9px] lg:text-xl">{movie.title}</span>
    </Link>
  );
};

export default MovieCard;
