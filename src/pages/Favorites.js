import Footer from "../components/Footer";
import dune from "../assets/actor/dunee.jpg";
import dune2 from "../assets/actor/dune.webp";
import Navbar from "../components/Navbar";
const Favorites = () => {
  return (
    <div className="bg-primary ">
      <Navbar/>
      <div className="flex flex-col lg:gap-20 mb-10 lg:mb-0 lg:p-20">
      <div>
        <p className="text-white text-3xl md:text-5xl text-center pb-5 lg:pb-0 md:text-left">My Favorites</p>
      </div>
      <div className="flex flex-row gap-3 lg:gap-0 flex-wrap items-center justify-evenly">
        <img className="w-28 lg:w-64 h-44 lg:h-80" src={dune} alt="dune" />
        <img className="w-28 lg:w-64 h-44 lg:h-80" src={dune2} alt="dune" />
        <img className="w-28 lg:w-64 h-44 lg:h-80" src={dune} alt="dune" />
        <img className="w-28 lg:w-64 h-44 lg:h-80" src={dune2} alt="dune" />
      </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Favorites;
