import { useState } from "react";
import { BiBookmark } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Add_Favorites } from "../rootStore/actions";
import { FaBookmark } from "react-icons/fa";

const MovieCard = ({ movie }) => {
  const [isHover, SetIsHover] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleGoAnotherPage = () => {
    navigate(`/movies/${movie.id}`);
  };

  const handleEnter = () => {
    SetIsHover(true);
  };
  const handleOut = () => {
    SetIsHover(false);
  };
  const handleAddFav = () => {
    dispatch({ type: Add_Favorites, payload: movie });
    setIsClicked(!isClicked);
  };

  return (
    <div className="flex flex-col  justify-between items-center h-80">
      <div className="relative flex justify-center items-center w-28 h-72 lg:w-96">
        {isHover && (
          <div className="flex justify-center items-center absolute inset-0">
            {isClicked ? (
              <FaBookmark
                onMouseEnter={handleEnter}
                onMouseLeave={handleOut}
                onClick={handleAddFav}
                className="z-30 w-auto h-10 text-slate-600"
              />
            ) : (
              <BiBookmark
                onMouseEnter={handleEnter}
                onMouseLeave={handleOut}
                onClick={handleAddFav}
                className="z-10 w-auto h-10 text-slate-600"
              />
            )}
          </div>
        )}
        <img
          loading="lazy"
          src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
          alt={movie.title}
          className="w-auto lg:w-auto h-64 bg-gray-200 self-start hover:opacity-55 hover:transition-all"
          onClick={handleGoAnotherPage}
          onMouseEnter={handleEnter}
          onMouseLeave={handleOut}
        />
      </div>
      <span className="text-white self-start text-[9px] lg:text-xl w-20 lg:w-72">
        {movie.title}
      </span>
    </div>
  );
};

export default MovieCard;
