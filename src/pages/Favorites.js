import Footer from "../components/Footer";
import dune from "../assets/actor/dunee.jpg";
import dune2 from "../assets/actor/dune.webp";
const Favorites = () => {
  return (
    <div className="bg-primary ">
      <div className="flex flex-col gap-20 p-20">
      <div>
        <p className="text-white text-3xl md:text-5xl text-center md:text-left">My Favorites</p>
      </div>
      <div className="flex flex-row gap-5 flex-wrap items-center justify-evenly">
        <img className="w-64 h-72" src={dune} alt="dune" />
        <img className="w-64 h-72" src={dune2} alt="dune" />
        <img className="w-64 h-72" src={dune} alt="dune" />
        <img className="w-64 h-72" src={dune2} alt="dune" />
      </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Favorites;
