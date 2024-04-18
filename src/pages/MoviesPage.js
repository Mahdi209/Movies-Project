import { useSelector } from "react-redux";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
export default function MoviesPage() {
  const movies = useSelector((state) => state.popular);

  return (
    <div>
      <Navbar/>
      <div>
        <p className="text-white hidden lg:flex text-7xl pl-12 pb-12 pt-12">Movies</p>
        <div className="flex flex-wrap justify-center items-center content-center gap-10 pb-12">
          {movies.map((movie) => (
            <div>
              <img
              loading="lazy"
                src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                alt={movie.title}
                className=" w-36 lg:w-96 h-auto bg-gray-200 lg:mr-16 hover:opacity-55 hover:transition-all"
              />
              <p className="text-white text-[9px] lg:text-xl pt-2 lg:pt-0 text-center lg:text-left">
                {movie.title}
              </p>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
}
