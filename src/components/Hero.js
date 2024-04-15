import movie from "../assets/hero/oppenheimer.png";
import start from "../assets/hero/play-button.png";
const Hero = () => {
  return (
    <div className="flex md:flex-row-reverse gap-x-5 md:px-5">
      <div id="right" className="w-full md:w-">
        <img className="w-full md:h-3/4 p-3 md:p-auto rounded-xl" src={movie} alt="movie" />
      </div>
      <div
        id="left"
        className="w-3/6 hidden md:flex flex-col px-3"
      >
        {/* title */}
        <div>
          <p className="text-white text-7xl font-serif py-10">Oppenheimer</p>
        </div>
        {/* description */}
        <div>
          <p className="text-white text-3xl leading-normal">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
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
