import { get_Popular, get_Trending, get_Id, get_Actor } from "./actions";
import { combineReducers } from "redux";

let initialState = {
  page: [1],
  popular: [],
  allMovies: [],
  trending: [],
  movies: [],
  actors: [],
};

export const popularReducer = (state = initialState, action) => {
  switch (action.type) {
    case get_Popular:
      return { ...state, popular: action.payload };

    default:
      break;
  }
  return state;
};
const moviePageReducer = (state = initialState, action) => {
  switch (action.type) {
    case PageAdd:
      return { ...state, page: state.page + 1 };

    default:
      break;
  }
  return state;
};

export const trendingReducer = (state = initialState, action) => {
  switch (action.type) {
    case get_Trending:
      return { ...state, trending: action.payload };

    default:
      break;
  }
};
export const idReducer = (state = initialState.id, action) => {
  switch (action.type) {
    case get_Id:
      return action.payload;

    default:
      return state;
  }
};

export const actorReducer = (state = initialState, action) => {
  console.log("🚀 ~ actorReducer ~ state:", state);
  switch (action.type) {
    case get_Actor:
      return { ...state, actors: action.payload, loading: false };

    case "actor/loading":
      return { ...state, loading: true };

    default:
      break;
  }
  return state;
};
export const AllMovesReducer = (state = initialState, action) => {
  switch (action.type) {
    case get_AllMovies:
      const moviesToAdd = Array.isArray(action.payload) ? action.payload : [];

      const uniqueMovies = moviesToAdd.filter((movie) => {
        return !state.allMovies.some(
          (existingMovie) => existingMovie.id === movie.id
        );
      });

      return { ...state, allMovies: [...state.allMovies, ...uniqueMovies] };

    default:
      break;
  }
  return state;
};
export const DetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case get_Details:
      return { ...state, details: action.payload };

    default:
      break;
  }
  return state;
};
export const VideosReducer = (state = initialState, action) => {
  switch (action.type) {
    case get_Videos:
      return { ...state, videos: action.payload };

    default:
      break;
  }
  return state;
};
export const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case Add_Favorites:
      if (state.favorites.some((movie) => movie.id === action.payload.id)) {
        return state;
      }
      return { ...state, favorites: [...state.favorites, action.payload] };

    default:
      break;
  }
  return state;
};

const rootReducer = combineReducers({
  popular: popularReducer,
  trending: trendingReducer,
  id: idReducer,
  actors: actorReducer,
  page: moviePageReducer,
  details: DetailsReducer,
  videos: VideosReducer,
  favorites: favoritesReducer,
});

export default rootReducer;
