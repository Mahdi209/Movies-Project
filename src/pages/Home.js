import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Popular from "../components/Popular";
import Trending from "../components/Trending";
import Navbar from "../components/Navbar";
const Home = () => {
  return (
    <div className=" bg-primary">
      <Hero />
      <Popular />
      <Trending />
      <Footer />
    </div>
  );
};

export default Home;
