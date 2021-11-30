import { combineEpics } from 'redux-observable';
import { getCharactersEpic } from './characters';

export default combineEpics(getCharactersEpic);
