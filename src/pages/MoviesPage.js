import { useEffect } from "react";
import { PageAdd } from "../rootStore/actions";
import { useDispatch, useSelector } from "react-redux";
import { getAllMovieData } from "../rootStore/getApiData";
import MovieCard from "../components/MovieCard";

export default function MoviesPage() {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.allMovies.allMovies);

  const Page = useSelector((state) => state.page.page);

  useEffect(() => {
    dispatch(getAllMovieData(Page));
  }, [Page]);

  const handleAdd = () => {
    dispatch({ type: PageAdd });
  };

  return (
    <div className="">
      <div className="flex flex-col gap-y-12">
        <p className="text-white  flex text-7xl pl-12 pb-12 pt-12">Movies</p>
        <div className="flex flex-wrap justify-center items-center  gap-10 pb-12">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
        <button
          className="self-center w-36 h-16 bg-slate-400 rounded-xl"
          onClick={handleAdd}
        >
          More
        </button>
      </div>
    </div>
  );
}
