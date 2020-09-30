import { SEARCH_DATA } from "../types/searchTypes";

// Action creators

export const searchData = (search) => {
  return async (dispatch) => {
    dispatch({
      type: SEARCH_DATA,
      payload: search,
    });
  };
};
