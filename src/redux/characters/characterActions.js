import {
  GET_CHARACTERS,
  GET_CHARACTERS_ERROR,
  GET_CHARACTERS_SUCCESS,
} from './characterTypes';

const getCharacters = () => {
  return {
    type: GET_CHARACTERS,
  };
};

const getCharactersSuccess = (charactersList) => {
  return {
    type: GET_CHARACTERS_SUCCESS,
    payload: charactersList,
  };
};

const getCharactersError = () => {
  return {
    type: GET_CHARACTERS_ERROR,
    payload: 'There was an error',
  };
};

export { getCharacters, getCharactersSuccess, getCharactersError };
