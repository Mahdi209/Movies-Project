import { get_Popular, get_Trending, get_Actor } from "./actions";

export const getPopularData = () => {
  return function (dispatch) {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=fabd82e3b9f4e96a721b2296be7f36ad"
    )
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: get_Popular, payload: data.results });
      });
  };
};
export const getTrendingData = () => {
  return function (dispatch) {
    fetch(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=fabd82e3b9f4e96a721b2296be7f36ad"
    )
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: get_Trending, payload: data.results });
      });
  };
};

export const getAllMovieData = () => {
  return function (dispatch) {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=fabd82e3b9f4e96a721b2296be7f36ad&include_adult=false&include_video=false&language=en-US&page=2&sort_by=popularity.desc"
    )
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: get_Trending, payload: data.results });
      });
  };
};

export const getActors = () => {
  return function (dispatch) {
    fetch(
      "https://api.themoviedb.org/3/person/popular?&page=1&api_key=aee80312b2fadfe6904aa67a5d15bcf6"
    )
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: get_Actor, payload: data.results });
      });
  };
};
