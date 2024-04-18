import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  getActors,
  getPopularData,
  getTrendingData,
} from "./rootStore/getApiData";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import MoviesPage from "./pages/MoviesPage";

import Movie from "./pages/Movie";

import Actors from "./pages/Actors";
import Favorites from "./pages/Favorites";
import Footer from "./components/Footer";
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPopularData());
    dispatch(getTrendingData());
    dispatch(getActors());
  }, [dispatch]);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:id" element={<Movie />} />
        <Route path="/actors" element={<Actors />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
