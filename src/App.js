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

import Movie from "./pages/Movie";

import Actors from "./pages/Actors";
import Favorites from "./pages/Favorites";
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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/actors" element={<Actors />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;
