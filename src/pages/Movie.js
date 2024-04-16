import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Movie = () => {
  const movies = useSelector((state) => state.popular);
  const { id } = useParams();

  const [movieInfo, setMovieInfo] = useState(null);

  useEffect(() => {
    const movieId = parseInt(id);
    const result = movies.find((movie) => movie.id === movieId);
    setMovieInfo(result);
  }, [id, movies]);

  if (!movieInfo) {
    return (
      <div className="text-7xl flex justify-center items-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="bg-gray-700 justify-center rounded-3xl h-auto pt-12 pb-12 lg:h-[500px] mx-10 flex flex-col-reverse lg:flex-row  lg:justify-between  items-center">
      <div className="self-start ml-16 mt-16">
        <div className="text-xl  lg:text-3xl lg:w-[400px]  mb-12 self-center">
          {movieInfo.title}
        </div>
        <div className="text-sm w-56 lg:text-xl md:w-[800px] lg:w-[600px] xl:w-[1000px] self-center ">
          {movieInfo.overview}
        </div>
      </div>
      <img
        src={`https://image.tmdb.org/t/p/original/${movieInfo.poster_path}`}
        alt={movieInfo.title}
        className="w-auto h-[400px] bg-gray-200 mr-16 rounded-3xl self-center "
      />
    </div>
  );
};

export default Movie;
