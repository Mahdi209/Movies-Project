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
import Actors from "./pages/Actors";
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
        <Route path="/actors" element={<Actors />} />
      </Routes>
    </div>
  );
}

export default App;
