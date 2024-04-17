import Footer from "../components/Footer";
import circle from "../assets/actor/circle.png";
import dune from "../assets/actor/dune.webp";
import dune2 from "../assets/actor/dunee.jpg";
import Navbar from "../components/Navbar";
const Actor = () => {
  return (
    <div className="h-auto bg-primary flex flex-col">
      <Navbar />
      <div className="flex flex-col lg:flex-row items-center lg:gap-x-20 lg:p-20">
        <div id="left" className="flex flex-col gap-y-5">
          <div>
            <img src={circle} alt="" />
          </div>
          <div>
            <p className="text-secondary text-5xl w-max">Leonardo Ameer</p>
          </div>
        </div>
        <div id="right">
          <p className="text-3xl text-white leading-loose">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </p>
        </div>
      </div>
      <div className="flex flex-row flex-wrap items-center justify-evenly content-center gap-5 px-32">
        <img className="w-64 h-72" src={dune} alt="dune" />
        <img className="w-64 h-72" src={dune2} alt="dune" />
        <img className="w-64 h-72" src={dune} alt="dune" />
        <img className="w-64 h-72" src={dune2} alt="dune" />
        <img className="w-64 h-72" src={dune} alt="dune" />
        <img className="w-64 h-72" src={dune2} alt="dune" />
        <img className="w-64 h-72" src={dune} alt="dune" />
        <img className="w-64 h-72" src={dune2} alt="dune" />
      </div>
      <Footer />
    </div>
  );
};

export default Actor;
