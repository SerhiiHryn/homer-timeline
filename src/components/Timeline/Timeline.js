import React from 'react';
import AddEvent from '../AddEvent/AddEvent';
import EventList from '../EventList/EventList';
import EventsDivider from '../EventsDivider/EventsDivider';
import './Timeline.scss';

const Timeline = ({ pastEvents, futureEvents }) => {
  const hasFutureEvents = !!futureEvents.length;
  const hasPastEvents = !!pastEvents.length;

  const classes = ['timeline'];

  if (!hasFutureEvents && !hasPastEvents) {
    classes.push('center');
  }

  return (
    <div className={classes.join(' ')}>
      {hasFutureEvents ? <EventList events={futureEvents} /> : null}
      {hasFutureEvents ? <EventsDivider /> : null}
      <AddEvent />
      {hasPastEvents ? < EventList events={pastEvents} /> : null}
    </div >
  );
};

export default Timeline;
