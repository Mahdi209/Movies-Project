import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";

const Popular = () => {
  const movies = useSelector((state) => state.popular);

  return (
    <div>
      <div>
        <div>
          <p className="text-white p-3 md:pb-10 md:text-6xl">Popular</p>
        </div>
        <div className="flex flex-row gap-2 items-center justify-center ">
          <div className="overflow-x-auto whitespace-no-wrap ml-[5%] mr-[5%]">
            <div className="flex flex-no-wrap">
              {movies.map((movie) => (
                <MovieCard movie={movie} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popular;
