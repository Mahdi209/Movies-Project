import { useSelector } from "react-redux";
import Footer from "../components/Footer";
const Actors = () => {
  const actorList = useSelector((state) => state.actors.actors);
  return (
    <div>
      <div className="flex flex-row flex-wrap items-center justify-center gap-20 p-20">
        {actorList.map((actor) => (
          <div
            key={actor.id}
            id="card"
            className="w-min h-min hover:opacity-55 hover:transition-all"
          >
            <div className=" w-40">
              <img
                className="w-full h-full rounded-xl "
                src={`https://image.tmdb.org/t/p/original/${actor.profile_path}`}
                alt=""
              />
            </div>
            <div>
              <p className="text-white text-center">{actor.name}</p>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Actors;
