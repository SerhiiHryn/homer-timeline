import React from 'react';
import Input from '../UI/Input/Input';
import addEventButton from '../../add-event-button.svg';
import Loader from '../UI/Loader/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { eventActions } from '../../redux/actions/event.actions';
import './AddEvent.scss';

const AddEvent = () => {
  const dispatch = useDispatch();
  const { loading, showNewEventForm, newEvent } = useSelector(state => state.event);

  const inputChangeHandler = (event) => {
    dispatch(eventActions.setNewEvent({
      ...newEvent,
      [event.target.name]: event.target.value,
    }));
  };

  const addEventHandler = async () => {
    dispatch(eventActions.addEvent(newEvent));
  };

  const toggleEventForm = () => {
    // TODO fix reseting newEvent
    dispatch(eventActions.setNewEvent({}));
    dispatch(eventActions.showForm(!showNewEventForm));
  };

  return (
    <div className="add-event-container">
      <div className="add-button">
        <img src={addEventButton} alt="add-event" onClick={toggleEventForm} />
        <div className={`event-form ${showNewEventForm ? 'show' : ''}`}>
          {loading ? <Loader /> : null}
          <div className="event-form__title">Add a new event</div>
          <div className="event-form__cancel-btn" onClick={toggleEventForm}>&times;</div>
          <div className="event-form__fields">
            <Input
              name="title"
              type="text"
              value={newEvent.title}
              placeholder="Enter title"
              onChange={inputChangeHandler} />
            <Input
              name="description"
              type="text"
              value={newEvent.discription}
              placeholder="Enter description"
              onChange={inputChangeHandler} />
            <Input
              name="tag"
              type="text"
              value={newEvent.tag}
              placeholder="Enter tag"
              onChange={inputChangeHandler} />
            <Input
              name="thumbnail"
              type="file"
              value={newEvent.thumbnail}
              placeholder="Add image"
              onChange={inputChangeHandler} />
            <Input
              name="date"
              type="datetime-local"
              value={newEvent.date}
              placeholder="Choose date"
              onChange={inputChangeHandler} />
          </div>
          <div className="event-form__save-button">
            <a onClick={addEventHandler}>Save and Publish</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEvent;
