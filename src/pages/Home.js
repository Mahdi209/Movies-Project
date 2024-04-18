import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Popular from "../components/Popular";
import Trending from "../components/Trending";
const Home = () => {
  return (
    <div className=" bg-primary">
      <Hero />
      <Popular />
      <Trending />
    </div>
  );
};

export default Home;
