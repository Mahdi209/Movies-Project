import instagram from "../assets/footer/instagram.png";
import facebook from "../assets/footer/facebook.png";
import x from "../assets/footer/twitter.png"
const Footer = () => {
  return (
    <div className="pt-32">
      <hr />
      <div className="flex flex-col items-center justify-between gap-y-20 py-20">
        <div className="hidden md:flex flex-row gap-x-10 text-white text-4xl">
          <span className="cursor-pointer hover:text-secondary">Actors</span>
          <span className="cursor-pointer hover:text-secondary">Favorites</span>
          <span className="cursor-pointer hover:text-secondary">Home</span>
          <span className="cursor-pointer hover:text-secondary">Movies</span>
          <span className="cursor-pointer hover:text-secondary">About</span>
        </div>
        <div className="flex flex-row gap-x-20 md:gap-x-32 items-center md:my-4">
          <img className="cursor-pointer w-10" src={instagram} alt="instagram" />
          <img className="cursor-pointer w-10" src={facebook} alt="facebook" />
          <img className="cursor-pointer w-10" src={x} alt="x" />
        </div>
        <div className="flex justify-center items-center ">
          <p className="text-white md:text-2xl">© 2024 m&m’s Inc. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
