import { useSelector } from "react-redux";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
const Actors = () => {
  const actorList = useSelector((state) => state.actors.actors);

  return (
    <div>
      <Navbar />
      <div className="flex flex-row flex-wrap items-center justify-center pb-10 lg:pb-0 gap-5 lg:gap-20 p-3 lg:p-20 ">
        {actorList.map((actor) => (
          <Link to={`/actors/${actor.name}`}>
            <div id="card" className="w-min h-min flex flex-col mx-5">
              <div className=" w-20 md:w-32 lg:w-40">
                <img
                  loading="lazy"
                  className="w-full h-full rounded-xl hover:opacity-55 hover:transition-all"
                  src={`https://image.tmdb.org/t/p/original/${actor.profile_path}`}
                  alt=""
                />
              </div>
              <div>
                <p className="text-white text-center text-xs md:text-sm lg:text-base">
                  {actor.name}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Actors;
