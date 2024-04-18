import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getActors,
  getPopularData,
  getTrendingData,
} from "./rootStore/getApiData";
import "./App.css";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import MoviesPage from "./pages/MoviesPage";
import Actors from "./pages/Actors";
import Favorites from "./pages/Favorites";
import About from "./pages/About";
import Actor from "./pages/Actor";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.actors.loading);
  console.log("🚀 ~ App ~ isLoading:", isLoading);

  useEffect(() => {
    dispatch(getPopularData());
    dispatch(getTrendingData());
    dispatch(getActors());
  }, [dispatch]);

  return (
    <div>
      <Navbar />
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/actors" element={<Actors />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/about" element={<About />} />
          <Route path="/actors/:name" element={<Actor />} />
        </Routes>
      )}
      <Footer />
    </div>
  );
}

export default App;
