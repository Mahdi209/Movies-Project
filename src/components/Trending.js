import { useSelector } from "react-redux";

const Trending = () => {
  const trending = useSelector((state) => state.trending);
  const nonAdultMovies = trending.filter((movie) => !movie.adult);

  return (
    <div>
      <div>
        <div>
          <p className="text-white p-3 md:pb-10 md:text-6xl">Top rated</p>
        </div>
        <div className="flex flex-row gap-2 items-center justify-center ">
          <div className="overflow-x-auto whitespace-no-wrap ml-[5%] mr-[5%]">
            <div className="flex flex-no-wrap">
              {nonAdultMovies.map((movie) => (
                <div className="flex-shrink-0">
                  <img
                    src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                    alt={movie.title}
                    className=" w-36 lg:w-96 h-auto bg-gray-200 mr-16"
                  />
                  <span className="text-white">{movie.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trending;
