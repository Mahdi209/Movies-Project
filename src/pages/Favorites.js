import Footer from "../components/Footer";
import dune from "../assets/actor/dunee.jpg";
import dune2 from "../assets/actor/dune.webp";
const Favorites = () => {
  const favorites = useSelector((state) => state.favorites.favorites);
  console.log("🚀 ~ Favorites ~ favorites:", favorites);

  return (
    <div className="bg-primary ">
      <div className="flex flex-col lg:gap-20 mb-10 lg:mb-0 lg:p-20">
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
