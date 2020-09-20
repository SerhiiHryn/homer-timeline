import React from 'react';
import { useSelector } from 'react-redux';
import AddEventButton from '../AddEventButton/AddEventButton';
import AddEventForm from '../AddEventForm/AddEventForm';
import EventList from '../EventList/EventList';
import EventsDivider from '../EventsDivider/EventsDivider';
import Loader from '../UI/Loader/Loader';
import './Timeline.scss';

const Timeline = ({ pastEvents, futureEvents }) => {
  const { loading, showNewEventForm } = useSelector(state => state.event);
  const hasFutureEvents = !!futureEvents.length;
  const hasPastEvents = !!pastEvents.length;

  const classes = ['timeline'];

  if (!hasFutureEvents && !hasPastEvents) {
    classes.push('center');
  }

  if (loading && !showNewEventForm) {
    return <Loader />;
  }

  return (
    <div className={classes.join(' ')}>
      {
        hasFutureEvents
          ? (
            <>
              <EventList events={futureEvents} isFutureEvent={true} />
              <EventsDivider />
            </>
          )
          : null
      }
      <AddEventButton />
      <AddEventForm />
      {hasPastEvents ? < EventList events={pastEvents} isFutureEvent={false} /> : null}
    </div >
  );
};

export default Timeline;
