import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPopularData, getTrendingData } from "./rootStore/getApiData";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import MoviesPage from "./pages/MoviesPage";
import Movie from "./pages/Movie";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPopularData());
    dispatch(getTrendingData());
  }, [dispatch]);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:id" element={<Movie />} />
      </Routes>
    </div>
  );
}

export default App;
