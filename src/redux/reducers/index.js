import { combineReducers } from 'redux';
import { eventReducer } from './event.reducer';

export const rootReducer = combineReducers({
  event: eventReducer,
});
