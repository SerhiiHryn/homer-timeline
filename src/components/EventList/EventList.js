import React from 'react';
import Event from '../Event/Event';
import './EventList.scss';

const EventList = ({ events, isFutureEvent }) => {
  const years = [];
  return (
    <div className={`events ${isFutureEvent ? 'future' : 'past'}`}>
      {
        events.map(e => {
          const eventYear = new Date(e.date).getFullYear();
          const showYear = !years.includes(eventYear);

          if (showYear) {
            years.push(eventYear);
          }

          return (
            <React.Fragment key={e.id}>
              <Event event={e} showYear={showYear} isFutureEvent={isFutureEvent} />
            </React.Fragment>
          );
        })
      }
    </div>
  );
};

export default EventList;
