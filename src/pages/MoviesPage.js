import { useSelector } from "react-redux";
export default function MoviesPage() {
  const movies = useSelector((state) => state.popular);

  return (
    <div>
      <div>
        <p className="text-white text-7xl pl-12 pb-12 pt-12">Movies</p>
        <div className="flex flex-wrap justify-center items-center content-center gap-10 pb-12">
          {movies.map((movie) => (
            <div>
              <img
                src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                alt={movie.title}
                className=" w-36 lg:w-96 h-auto bg-gray-200 mr-16 hover:opacity-55 hover:transition-all"
              />
              <span className="text-white text-[9px] lg:text-xl">
                {movie.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
