import dune from "../assets/actor/dunee.jpg";
import { useSelector, useDispatch } from "react-redux";
import { getActorData } from "../rootStore/getApiData";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
const Actors = () => {
  const actorList = useSelector((state) => state.actors.actors);
  const actor = useSelector((state) => state.actor);
  const dispatch = useDispatch();

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
