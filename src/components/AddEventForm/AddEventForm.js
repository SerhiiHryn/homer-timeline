import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { eventActions } from '../../redux/actions/event.actions';
import DatePicker from '../DatePicker/DatePicker';
import Input from '../UI/Input/Input';
import Loader from '../UI/Loader/Loader';
import './AddEventForm.scss';

const AddEventForm = () => {
  const dispatch = useDispatch();
  const [showError, setShowError] = useState(false);
  const { loading, showNewEventForm, newEvent } = useSelector(state => state.event);

  const classes = ['event-form'];

  if (showNewEventForm) {
    classes.push('show');
  }

  const inputChangeHandler = event => {
    if (showError) setShowError(false);

    dispatch(eventActions.setNewEvent({
      ...newEvent,
      [event.target.name]: event.target.value,
    }));
  };

  const dateChangeHandler = date => {
    setShowError(false);
    const dateString = JSON.stringify(date);
    dispatch(eventActions.setNewEvent({
      ...newEvent,
      date: dateString.substring(1, dateString.length - 1),
    }));
  };

  const addEventHandler = async () => {
    if (!newEvent.title || !newEvent.date) {
      setShowError(true);
      return;
    }

    setShowError(false);
    dispatch(eventActions.addEvent(newEvent));
  };

  const closeForm = () => {
    // TODO fix reseting newEvent
    dispatch(eventActions.setNewEvent({
      title: '',
      description: '',
      tag: '',
    }));

    setShowError(false);
    dispatch(eventActions.showForm(false));
  };

  return (
    <div className={classes.join(' ')}>
      {loading ? <Loader /> : null}
      <div className="event-form__title">Add a new event</div>
      <div className="event-form__cancel-btn" onClick={closeForm}>&times;</div>
      <div className="event-form__fields">
        <Input
          name="title"
          type="text"
          value={newEvent.title}
          placeholder="Title"
          onChange={inputChangeHandler} />
        <Input
          name="description"
          type="text"
          value={newEvent.description}
          placeholder="Description"
          onChange={inputChangeHandler} />
        <Input
          name="tag"
          type="text"
          value={newEvent.tag}
          placeholder="Tag"
          onChange={inputChangeHandler} />
        <Input
          name="thumbnail"
          type="file"
          value={newEvent.thumbnail}
          onChange={inputChangeHandler} />
        <DatePicker
          value={newEvent.date}
          onChange={dateChangeHandler} />
      </div>
      <div className="event-form__save-button">
        <button onClick={addEventHandler}>Save and Publish</button>
      </div>
      {
        showError
          ? <div className="event-form__error">The &#39;Title&#39; and the &#39;Date&#39; fields cannot be blank</div>
          : null
      }
    </div>
  );
};

export default AddEventForm;
