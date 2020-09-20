import sort from 'sort-array';
import { utils } from '../utils';

const EVENTS_STORAGE_KEY = 'events';

export const eventService = {
  addEvent(event) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const events = JSON.parse(localStorage.getItem(EVENTS_STORAGE_KEY) || '[]');
        event.id = Date.now();
        events.push(event);
        localStorage.setItem(EVENTS_STORAGE_KEY, JSON.stringify(events));

        resolve(event);
      }, 1000);
    });
  },
  getEvents() {
    return new Promise((resolve) => {
      setTimeout(() => {
        const events = JSON.parse(localStorage.getItem(EVENTS_STORAGE_KEY) || '[]');
        resolve(events);
      }, 1000);
    });
  },
  sortEvents(events) {
    const pastEvents = [];
    const futureEvents = [];

    events.forEach(event => {
      utils.isFutureEvent(event.date) ? futureEvents.push(event) : pastEvents.push(event);
    });

    this.orderEvents(pastEvents);
    this.orderEvents(futureEvents);

    return {
      pastEvents,
      futureEvents,
    };
  },
  orderEvents(events) {
    sort(events, { by: 'date', order: 'desc' });
  },
};
