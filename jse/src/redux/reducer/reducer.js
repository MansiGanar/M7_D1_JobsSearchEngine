import { ADD, DELETE } from "../actions/actions";

import { initialState } from "../store/store";

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        jobs: {
          ...state.jobs,
          favourites: [...state.jobs.favourites, action.payload],
        },
      };
    case DELETE:
      return {
        ...state,
        jobs: {
          ...state.jobs,
          favourites: state.jobs.favourites.filter(
            (jobs, index) => index !== action.payload
          ),
        },
      };
    default: {
      return state;
    }
  }
};

export default mainReducer;
