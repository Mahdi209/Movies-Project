import search from "../assets/navbar/search.png";
import burger from "../assets/navbar/burger-bar.png";
import circle from "../assets/actor/circle.png";
import { useState } from "react";
import "./navbar.css"
const Navbar = () => {
  const [burgers, setBurgers] = useState(true);
  const handleBurger = () => {
    setBurgers(!burgers);
  };
  return (
    <div>
      <div className="flex flex-row p-3 items-center justify-between">
        <div className="md:hidden">
          <img className="w-7 cursor-pointer" src={search} alt="" />
        </div>
        <div className="cursor-pointer lg:mr-20">
          <span className="text-secondary text-3xl lg:text-5xl">m</span>
          <span className="text-white text-sm lg:text-md">&</span>
          <span className="text-secondary text-3xl lg:text-5xl">m</span>
          <span className="text-white text-md lg:text-lg">'s</span>
        </div>
        <div className="hidden lg:flex flex-row text-white gap-x-14 text-2xl nav">
          <p className="hover:text-secondary cursor-pointer">Home</p>
          <p className="hover:text-secondary cursor-pointer">Movies</p>
          <p className="hover:text-secondary cursor-pointer">Actors</p>
          <p className="hover:text-secondary cursor-pointer">Favorites</p>
          <p className="hover:text-secondary cursor-pointer">About</p>
        </div>
        <div className="hidden lg:flex justify-end cursor-pointer">
          <img className="w-10 " src={search} alt="" />
        </div>
        <div className="hidden lg:flex">
          <img className="w-10 h-10" src={circle} alt="" />
        </div>
        <div className="md:hidden">
          <img
            onClick={handleBurger}
            className={`${
              burgers ? "rotate-0 transition-all" : "-rotate-90 transition-all"
            } w-7 cursor-pointer`}
            src={burger}
            alt=""
          />
        </div>
      </div>
      <div
        className={`${
          burgers ? "hidden" : ""
        } absolute w-64 h-screen bg-primary right-0 divide-solid divide-y-2 divide-white opacity-90 flex flex-col `}
      >
        <p className="text-center text-white py-5">Movies</p>
        <p className="text-center text-white py-5">Favorites</p>
        <p className="text-center text-white py-5">Actors</p>
        <p className="text-center text-white py-5">About</p>
      </div>
    </div>
  );
};

export default Navbar;
