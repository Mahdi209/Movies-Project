import { useSelector } from "react-redux";
import { FaPlay } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  const movies = useSelector((state) => state.popular.popular);
  const heroMovie = movies.filter(
    (movie) => movie.title === "Kung Fu Panda 4"
  )[0];

  const handleGoAnotherPage = () => {
    navigate(`/movies/${heroMovie.id}`);
  };
  return (
    <div className="flex flex-col md:flex-row-reverse  gap-x-5 md:px-5">
      <div id="right" className="w-full px-2 lg:px-0">
        <img
          onClick={handleGoAnotherPage}
          loading="lazy"
          className=""
          src={`https://image.tmdb.org/t/p/original/${heroMovie?.backdrop_path}`}
          alt={heroMovie?.title}
        />
      </div>
      <div id="left" className="w-3/6 flex flex-col px-3 ">
        {/* title */}
        <div className="hidden lg:flex">
          <p className="text-white  sm:text-sm md:text-lg lg:text-5xl font-serif py-10">
            {heroMovie?.title}
          </p>
        </div>
        {/* description */}
        <div className="hidden lg:flex">
          <p className="text-white sm:text-sm md:text-lg lg:text-2xl leading-normal">
            {heroMovie?.overview}
          </p>
        </div>
        {/* buttons */}
        <div className="hidden lg:flex flex-row gap-x-3 pl-1 mt-20">
          <div className="flex flex-row hover:opacity-80 w-auto px-10 h-16 items-center justify-center gap-x-1 rounded-md text-white bg-secondary text-center cursor-pointer">
            <FaPlay className="mr-2" />
            <button className="text-3xl ">Play</button>
          </div>

          <div className="px-10 w-auto h-16 rounded-md hover:opacity-80 text-white bg-gray-500 text-center flex items-center cursor-pointer">
            <button onClick={handleGoAnotherPage} className="text-3xl w-max">
              More info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
