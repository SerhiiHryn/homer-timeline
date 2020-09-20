import {
  ADD_EVENT,
  ADD_EVENT_SUCCESS,
  ADD_EVENT_ERROR,
  GET_EVENTS,
  GET_EVENTS_SUCCESS,
  GET_EVENTS_ERROR,
  LOADING_END,
  LOADING_START, SHOW_NEW_EVENT_FORM, SET_NEW_EVENT
} from '../types/event.types';

export const eventActions = {
  loadingStart: () => ({ type: LOADING_START }),
  loadingEnd: () => ({ type: LOADING_END }),

  showForm: show => ({ type: SHOW_NEW_EVENT_FORM, payload: { data: show } }),

  setNewEvent: newEvent => ({ type: SET_NEW_EVENT, payload: { data: newEvent } }),

  addEvent: event => ({ type: ADD_EVENT, payload: { data: event } }),
  addEventSuccess: event => ({ type: ADD_EVENT_SUCCESS, payload: { data: event } }),
  addEventError: error => ({ type: ADD_EVENT_ERROR, payload: { error } }),

  getEvents: () => ({ type: GET_EVENTS }),
  getEventsSuccess: events => ({ type: GET_EVENTS_SUCCESS, payload: { data: events } }),
  getEventsError: error => ({ type: GET_EVENTS_ERROR, payload: { error } }),
};
