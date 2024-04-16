import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPopularData, getTrendingData } from "./rootStore/getApiData";
import "./App.css";
import Home from "./pages/Home";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPopularData());
    dispatch(getTrendingData());
  }, [dispatch]);

  return (
    <div>
      <Home />
    </div>
  );
}

export default App;
