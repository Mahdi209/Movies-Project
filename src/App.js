import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPopularData, getTrendingData } from "./rootStore/getApiData";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPopularData());
    dispatch(getTrendingData());
  }, [dispatch]);

  return (
    <div>
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
