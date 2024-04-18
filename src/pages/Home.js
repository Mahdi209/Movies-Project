import Hero from "../components/Hero";
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
