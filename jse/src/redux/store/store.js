import { createStore } from "redux";
import mainReducer from "../reducer/reducer";

export const initialState = {
  jobs: {
    favourites: [],
  },
};

let configureStore = createStore(
  mainReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default configureStore;
