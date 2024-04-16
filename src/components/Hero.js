import start from "../assets/hero/play-button.png";
import { useSelector } from "react-redux";

const Hero = () => {
  const movies = useSelector((state) => state.popular);
  const heroMovie = movies.filter(
    (movie) => movie.title === "Kung Fu Panda 4"
  )[0];
  return (
    <div className="flex md:flex-row-reverse gap-x-5 md:px-5">
      <div id="right" className="w-full ">
        <img
          src={`https://image.tmdb.org/t/p/original/${heroMovie?.backdrop_path}`}
          alt={heroMovie?.title}
        />
      </div>
      <div id="left" className="w-3/6 hidden md:flex flex-col px-3">
        {/* title */}
        <div>
          <p className="text-white text-7xl font-serif py-10">
            {heroMovie?.title}
          </p>
        </div>
        {/* description */}
        <div>
          <p className="text-white text-3xl leading-normal">
            {heroMovie?.overview}
          </p>
        </div>
        {/* buttons */}
        <div className="flex flex-row gap-x-3 pl-1 mt-20">
          <div className="flex flex-row w-auto px-10 h-16 items-center justify-center gap-x-1 rounded-md text-white bg-secondary text-center cursor-pointer">
            <img className="w-10 h-10" src={start} alt="" />
            <button className="text-3xl">Play</button>
          </div>

          <div className="px-10 w-auto h-16 rounded-md text-white bg-gray-500 text-center flex items-center cursor-pointer">
            <button className="text-3xl w-max">More info</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
