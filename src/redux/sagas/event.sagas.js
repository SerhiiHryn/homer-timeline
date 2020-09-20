import { put, call, takeEvery } from 'redux-saga/effects';
import { eventService } from '../../services/event.service';
import { eventActions } from '../actions/event.actions';
import { ADD_EVENT, GET_EVENTS } from '../types/event.types';


function* addEventWorker(action) {
  try {
    yield put(eventActions.loadingStart());
    const event = yield call(eventService.addEvent, action.payload.data);
    yield put(eventActions.addEventSuccess(event));
    yield put(eventActions.showForm(false));
    yield put(eventActions.setNewEvent({
      title: '',
      description: '',
      tag: '',
    }));
  } catch (e) {
    yield put(eventActions.addEventError(e));
  } finally {
    yield put(eventActions.loadingEnd());
  }
}

function* getEventsWorker() {
  try {
    yield put(eventActions.loadingStart());
    const events = yield call(eventService.getEvents);
    yield put(eventActions.getEventsSuccess(events));
  } catch (e) {
    yield put(eventActions.getEventsError(e));
  } finally {
    yield put(eventActions.loadingEnd());
  }
}

export const eventSagas = [
  takeEvery(ADD_EVENT, addEventWorker),
  takeEvery(GET_EVENTS, getEventsWorker),
];
