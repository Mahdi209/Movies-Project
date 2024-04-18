import { useSelector } from "react-redux";
import MovieCard from "../components/MovieCard";

const Favorites = () => {
  const favorites = useSelector((state) => state.favorites.favorites);
  console.log("🚀 ~ Favorites ~ favorites:", favorites);

  return (
    <div>
      <div>
        <p className="text-white text-7xl pl-12 pb-12 pt-12">
          favorites Movies
        </p>
        <div className="flex flex-wrap justify-center items-center content-center gap-10 pb-12">
          {favorites?.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Favorites;
