import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isClick, setIsClick] = useState(false);
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const handleClick = () => {
    setIsClick(!isClick);
  };
  const handleBurgerOpen = () => {
    setIsBurgerOpen(!isBurgerOpen);
  };

  return (
    <div className="flex flex-col relative">
      <nav className="flex justify-between m-5">
        <div className="flex justify-between items-center cursor-pointer ">
          <div
            id="logo"
            className="text-secondary text-2xl pl-5  cursor-pointer lg:pr-36"
          >
            M&M's
          </div>

          <ul className="hidden lg:flex justify-between w-[600px] text-2xl">
            <li className="cursor-pointer  hover:text-secondary hover:scale-110 hover:transition-all">
              <Link to="/">Home</Link>
            </li>
            <li className="cursor-pointer  hover:text-secondary hover:scale-110 hover:transition-all">
              <Link to="/movies">Movies</Link>
            </li>
            <li className="cursor-pointer  hover:text-secondary hover:scale-110 hover:transition-all">
            <Link to="/actors">Actors</Link>
            </li>
            <li className="cursor-pointer  hover:text-secondary hover:scale-110 hover:transition-all">
              About
            </li>
            <li className="cursor-pointer  hover:text-secondary hover:scale-110 hover:transition-all">
              Favorites
            </li>
          </ul>
        </div>
        <div className="flex gap-10 items-center justify-center ">
          <div className="flex gap-7 justify-center items-center">
            {isClick && (
              <input
                id="search"
                type="search"
                className="w-40 lg:cursor-pointer lg:w-72 h-10 bg-slate-700 focus:bg-slate-600 focus:outline-none rounded-2xl pl-5 "
                placeholder="Search"
              />
            )}

            <FaSearch
              className=" cursor-pointer h-auto w-6 hover:scale-110 hover:transition-all "
              onClick={handleClick}
            />
            <div className="cursor-pointer bg-secondary items-center rounded-full w-14 h-14"></div>
            {isBurgerOpen ? (
              <GiHamburgerMenu
                onClick={handleBurgerOpen}
                className="cursor-pointer text-2xl hover:text-secondary hover:scale-110 hover:transition-all lg:hidden"
              />
            ) : null}
          </div>
        </div>
      </nav>

      {isBurgerOpen ? null : (
        <div
          id="nav-burger"
          className="absolute  flex flex-col  w-96 bg-slate-800  h-screen justify-around items-center self-end lg:hidden"
        >
          <div className="mt-3 mb-72 mr-80">
            <IoCloseSharp
              onClick={handleBurgerOpen}
              className="cursor-pointer text-3xl hover:text-secondary hover:scale-110 hover:transition-all lg:hidden"
            />
          </div>
          <ul className="flex flex-col justify-center items-center text-2xl mb-[600px]   ">
            <li className="flex justify-center items-center  cursor-pointer h-16 w-[350px] hover:bg-gray-900   hover:text-secondary hover:scale-110 hover:transition-all">
              Home
            </li>
            <li className="flex justify-center items-center  cursor-pointer h-16 w-[350px] hover:bg-gray-900   hover:text-secondary hover:scale-110 hover:transition-all">
              Movies
            </li>
            <li className="flex justify-center items-center  cursor-pointer h-16 w-[350px] hover:bg-gray-900 hover:text-secondary hover:scale-110 hover:transition-all">
              Actors
            </li>

            <li className="flex justify-center items-center  cursor-pointer h-16 w-[350px] hover:bg-gray-900     hover:text-secondary hover:scale-110 hover:transition-all">
              About
            </li>

            <li className="flex justify-center items-center  cursor-pointer h-16 w-[350px] hover:bg-gray-900   hover:text-secondary hover:scale-110 hover:transition-all">
              Favorites
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
