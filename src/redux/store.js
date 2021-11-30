import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootEpic from '../epics';
import characterReducers from './characters/characterReducers';

const rootReducer = combineReducers({
  characters: characterReducers,
});

const generateStore = () => {
  const epicMiddleware = createEpicMiddleware();

  const middlewareEnhancer = applyMiddleware(epicMiddleware);
  const composeEnhacers = composeWithDevTools(middlewareEnhancer);
  const store = createStore(rootReducer, composeEnhacers);

  epicMiddleware.run(rootEpic);

  return store;
};

export default generateStore;
