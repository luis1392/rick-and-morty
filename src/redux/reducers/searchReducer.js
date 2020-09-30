import { SEARCH_DATA } from "../types/searchTypes";

const initialState = {
  search: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH_DATA:
      return {
        ...action,
        search: action.payload,
      };

    default:
      return state;
  }
}
