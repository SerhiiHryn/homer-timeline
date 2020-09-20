import React from 'react';
import addEventButton from '../../add-event-button.svg';
import { useDispatch } from 'react-redux';
import { eventActions } from '../../redux/actions/event.actions';
import './AddEventButton.scss';

const AddEventButton = () => {
  const dispatch = useDispatch();

  const toggleEventForm = () => {
    dispatch(eventActions.showForm(true));
  };

  return (
    <div className="add-event-container">
      <div className="add-button">
        <img
          src={addEventButton}
          alt="add-event"
          onClick={toggleEventForm} />
      </div>
    </div>
  );
};

export default AddEventButton;
