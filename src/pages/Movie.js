import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getMoviesDetails, getMoviesVideos } from "../rootStore/getApiData";
import { BsYoutube } from "react-icons/bs";

const Movie = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const movieId = parseInt(id);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(getMoviesDetails(movieId));
    dispatch(getMoviesVideos(movieId));

    const delayTimer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(delayTimer);
  }, [dispatch, movieId]);

  const movie = useSelector((state) => state.details.details);
  const movieVideos = useSelector((state) => state.videos.videos);
  const movieVideosFilter = movieVideos.filter(
    (video) => video.type === "Trailer"
  );

  if (!movie || loading) {
    return (
      <div className="text-7xl flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }
  return (
    <div className="bg-gray-700 justify-center rounded-3xl h-auto pt-12 pb-12 lg:h-[500px] mx-10 flex flex-col-reverse lg:flex-row  lg:justify-between  items-center">
      <div className=" ml-16  flex flex-col gap-5 justify-between">
        <div className="text-xl lg:text-3xl lg:w-[500px] mb-5  ">
          {movie?.title}
        </div>
        <div className="text-sm w-56 lg:text-xl md:w-[800px] lg:w-[600px] xl:w-[1000px] ">
          {movie?.overview}
        </div>
        <div className="flex w-auto text-xl">
          Genre:
          {movie.genres.map((genre) => (
            <div className=" flex " key={genre.id}>
              <span className="bg-slate-400 ml-3 rounded-lg p-1">
                {" "}
                {genre.name}
              </span>
            </div>
          ))}
        </div>

        <a
          className="flex "
          target="_blank"
          href={`https://www.youtube.com/embed/${movieVideosFilter[0]?.key}`}
        >
          <span className="bg-slate-400 rounded-lg w-28 flex  justify-center items-center">
            Watch Trailer:
          </span>
          <span>
            <BsYoutube className="w-auto h-7 ml-3" />
          </span>
        </a>
      </div>
      <img
        src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
        alt={movie.title}
        className="w-auto h-[400px] bg-gray-200 mr-16 rounded-3xl self-center"
      />
    </div>
  );
};

export default Movie;
