import React from 'react';
import Event from '../Event/Event';
import './EventList.scss';

const EventList = ({ events }) => {
  const years = [];
  return (
    <div className="events">
      {
        events.map(e => {
          const eventYear = new Date(e.date).getFullYear();
          const showYear = !years.includes(eventYear);

          if (showYear) {
            years.push(eventYear);
          }

          return (
            <React.Fragment key={e.id}>
              {/* { eventYearWasRendered ? null : <div>{eventYear}</div>} */}
              <Event event={e} showYear={showYear} />
            </React.Fragment>
          );
        })
      }
    </div>
  );
};

export default EventList;
