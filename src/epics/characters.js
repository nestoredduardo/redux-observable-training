import { ofType } from 'redux-observable';
import { catchError, map, concatMap } from 'rxjs';
import axios from 'axios';

import { GET_CHARACTERS } from '../redux/characters/characterTypes';
import {
  getCharactersError,
  getCharactersSuccess,
} from '../redux/characters/characterActions';

const getCharactersEpic = (action$) =>
  action$.pipe(
    ofType(GET_CHARACTERS),
    concatMap((action) =>
      axios.get('https://rickandmortyapi.com/api/character')
    ),
    map((response) => response.data.results),
    map((characters) => getCharactersSuccess(characters)),
    catchError(getCharactersError())
    /* 
    mergeMap((action) =>
      from().pipe(
        map((response) => getCharactersSuccess(response.data.results)),
        catchError(() => getCharactersError()),
        startWith(getCharacters)
      )
    ) */
  );

export { getCharactersEpic };
