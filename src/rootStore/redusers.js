import { get_Popular, get_Trending, get_Actor } from "./actions";
import { combineReducers } from "redux";

let initialState = {
  popular: [],
  trending: [],
  movies: [],
  actors: [],
  loading: false,
};

export const popularReducer = (state = initialState.popular, action) => {
  switch (action.type) {
    case get_Popular:
      return action.payload;

    default:
      break;
  }
  return state;
};
export const trendingReducer = (state = initialState.trending, action) => {
  switch (action.type) {
    case get_Trending:
      return action.payload;

    default:
      break;
  }
  return state;
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

const rootReducer = combineReducers({
  popular: popularReducer,
  trending: trendingReducer,
  actors: actorReducer,
});

export default rootReducer;
