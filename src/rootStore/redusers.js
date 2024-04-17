import { get_Popular, get_Trending } from "./actions";
import { combineReducers } from "redux";

let initialState = {
  page: 1,
  popular: [],
  trending: [],
  search: [],
};

export const popularReducer = (state = initialState.popular, action) => {
  switch (action.type) {
    case get_Popular:
      return action.payload;

    default:
      return state;
  }
};
const moviePageReducer = (state = initialState, action) => {};

export const trendingReducer = (state = initialState.trending, action) => {
  switch (action.type) {
    case get_Trending:
      return action.payload;

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  popular: popularReducer,
  trending: trendingReducer,
});

export default rootReducer;
