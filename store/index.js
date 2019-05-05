import { createStore, combineReducers } from 'redux';
import combos from './combos/reducers';

const rootReducer = combineReducers({
  combos
});

const makeStore = (initialState) => {
	return createStore(rootReducer, initialState);
};

export default makeStore;