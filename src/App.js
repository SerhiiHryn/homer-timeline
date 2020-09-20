import React, { useEffect } from 'react';
import Timeline from './components/Timeline/Timeline';
import { useDispatch, useSelector } from 'react-redux';
import { eventActions } from './redux/actions/event.actions';
import './App.scss';

function App() {
  const dispatch = useDispatch();
  const { pastEvents, futureEvents } = useSelector(state => state.event);


  useEffect(() => {
    dispatch(eventActions.getEvents());
  }, [dispatch]);

  return (
    <div className="app">
      <Timeline pastEvents={pastEvents} futureEvents={futureEvents} />
    </div>
  );
}

export default App;
