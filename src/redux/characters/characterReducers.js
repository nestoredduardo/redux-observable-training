import {
  GET_CHARACTERS,
  GET_CHARACTERS_ERROR,
  GET_CHARACTERS_SUCCESS,
} from './characterTypes';

const initialState = {
  charactersList: [],
  fetching: false,
  error: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CHARACTERS:
      return { ...state, fetching: true };
    case GET_CHARACTERS_SUCCESS:
      return { ...state, charactersList: action.payload, fetching: false };
    case GET_CHARACTERS_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default reducer;
