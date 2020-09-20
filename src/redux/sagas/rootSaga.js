import { all } from 'redux-saga/effects';
import { eventSagas } from './event.sagas';


export function* rootSaga() {
  yield all([...eventSagas]);
}
