import dune from "../assets/actor/dune.webp";
const MoviePage = () => {
  return (
    <div>
      <div>
        <div>
          <p className="text-white p-3 md:pb-10 md:text-6xl">Popular</p>
        </div>
        <div className="flex flex-row gap-2 items-center justify-center ">
          <img className="w-24 md:w-56" src={dune} alt="" />
        </div>
      </div>
    </div>
  );
};

export default MoviePage;
