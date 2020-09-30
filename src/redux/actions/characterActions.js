import {
  FETCH_CHARACTER_BEGIN,
  FETCH_CHARACTER_SUCCESS,
  FETCH_CHARACTER_ERROR,
} from "../types/characterTypes";

// Action creators

export const fetchCharactersBegin = () => {
  return async (dispatch) => {
    dispatch({
      type: FETCH_CHARACTER_BEGIN,
    });
  };
};
export const fetchCheractersSuccess = (characters) => {
  return async (dispatch) => {
    dispatch({
      type: FETCH_CHARACTER_SUCCESS,
      payload: characters,
    });
  };
};

export const fetchCheractersError = (error) => {
  return async (dispatch) => {
    dispatch({
      type: FETCH_CHARACTER_ERROR,
      payload: error,
    });
  };
};
