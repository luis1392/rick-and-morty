import {
  FETCH_CHARACTER_BEGIN,
  FETCH_CHARACTER_SUCCESS,
  FETCH_CHARACTER_ERROR,
} from "../types/characterTypes";

const initialState = {
  characters: null,
  loading: false,
  error: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_CHARACTER_BEGIN:
      return { ...action, loading: true, error: null };

    case FETCH_CHARACTER_SUCCESS:
      return {
        ...action,
        loading: false,
        characters: action.payload.results,
      };

    case FETCH_CHARACTER_ERROR:
      return {
        ...action,
        loading: true,
        characters: [],
        error: action.payload,
      };

    default:
      return state;
  }
}
