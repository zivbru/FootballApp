import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import teams from './reducers/teams';

const rootReducer = combineReducers({
  teams,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
