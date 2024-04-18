import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
const Actor = () => {
  const actorList = useSelector((state) => state.actors.actors);
  const [actorInfo, setActorInfo] = useState(null);
  const { name } = useParams();
  useEffect(() => {
    const result = actorList.find((actor) => actor.name === name);
    setActorInfo(result);
  }, [name]);

  if (!actorInfo) {
    return;
  }

  return (
    <div id="actor" className="h-auto bg-primary flex flex-col">
      <div className="flex flex-col lg:flex-row items-center lg:gap-x-20 lg:p-20">
        <div id="left" className="flex flex-col gap-y-5 items-center">
          <div className="w-56">
            <img
              className="w-full rounded-lg border-2 border-white"
              src={`https://image.tmdb.org/t/p/original/${actorInfo.profile_path}`}
              alt=""
            />
          </div>
          <div>
            <p className="text-secondary text-3xl pb-5 lg:pb-0 lg:text-5xl w-max">
              {actorInfo.name}
            </p>
          </div>
        </div>
        <div id="right">
          <p className=" px-10 lg:px-0 text-left lg:text-3xl text-white leading-loose">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis
            quibusdam optio sed aspernatur nesciunt possimus facere unde eos
            sunt laboriosam. Repellendus dolorum quae sit eum, quaerat
            voluptates? Quos vel reiciendis architecto quibusdam, aliquam esse?
            Unde consequuntur accusamus neque error quis.
          </p>
        </div>
      </div>
      <div className="flex flex-row flex-wrap items-center justify-center pb-40 lg:pb-10 py-10 gap-y-32 md:gap-10 lg:gap-20">
        {actorInfo.known_for.map((poster) => {
          console.log(poster);
          return (
            <div>
              <div className="flex flex-col w-56 h-72 items-center">
                <img
                  className="w-full rounded-lg "
                  src={`https://image.tmdb.org/t/p/original/${poster.poster_path}`}
                  alt=""
                />
                <p className="text-lg text-center pt-5 font-bold">
                  {poster.original_title || poster.name}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default Actor;
