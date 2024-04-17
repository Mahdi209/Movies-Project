import {
  get_Popular,
  get_Trending,
  get_Id,
  get_Actor,
} from "./actions";
import { combineReducers } from "redux";

let initialState = {
  popular: [],
  trending: [],
  id: [],
  actors: [],
};

export const popularReducer = (state = initialState.popular, action) => {
  switch (action.type) {
    case get_Popular:
      return action.payload;

    default:
      return state;
  }
};
export const trendingReducer = (state = initialState.trending, action) => {
  switch (action.type) {
    case get_Trending:
      return action.payload;

    default:
      return state;
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
  switch (action.type) {
    case get_Actor:
      return { ...state, actors: action.payload };

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
});

export default rootReducer;
