export const ADD = "ADD";
export const DELETE = "DELETE";

export const addToFavourite = (item) => ({
  type: ADD,
  payload: item,
});

export const deleteFavourite = (index) => ({
  type: DELETE,
  payload: index,
});
