import { eventService } from '../../services/event.service';
import { utils } from '../../utils';
import {
  ADD_EVENT_SUCCESS,
  GET_EVENTS_SUCCESS,
  LOADING_END,
  LOADING_START,
  SET_NEW_EVENT,
  SHOW_NEW_EVENT_FORM
} from '../types/event.types';

const initialState = {
  pastEvents: [],
  futureEvents: [],
  showNewEventForm: false,
  newEvent: {},
  loading: false,
  error: null,
};

export const eventReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_EVENT_SUCCESS: {
      const event = action.payload.data;

      if (utils.isFutureEvent(event.date)) {
        const futureEvents = [...state.futureEvents, event];
        return { ...state, futureEvents };
      } else {
        const pastEvents = [...state.pastEvents, event];
        return { ...state, pastEvents };
      }
    }

    case GET_EVENTS_SUCCESS: {
      let { pastEvents, futureEvents } = eventService.sortEvents(action.payload.data);
      return { ...state, pastEvents, futureEvents };
    }

    case SHOW_NEW_EVENT_FORM: {
      return { ...state, showNewEventForm: action.payload.data };
    }

    case SET_NEW_EVENT: {
      return { ...state, newEvent: action.payload.data };
    }

    case LOADING_START: {
      return { ...state, loading: true };
    }

    case LOADING_END: {
      return { ...state, loading: false };
    }

    default: {
      return { ...state };
    }
  }
};
