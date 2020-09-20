import React from 'react';
import thumbnail from '../../thumbnail.jpg';
import { utils } from '../../utils';
import './Event.scss';

function getEventYear(event) {
  return new Date(event.date).getFullYear();
}

const Event = ({ event, showYear, isFutureEvent }) => {
  return (
    <>
      {showYear ? <span className="event-year">{getEventYear(event)}</span> : null}
      <div className="event-container">
        <div className={`event ${isFutureEvent ? 'future' : ''}`}>
          <div className="event__thumbnail">
            <img src={thumbnail} alt={event.tag} />
          </div>
          {
            event.tag
              ? (
                <div className="event__tag">
                  <div className="event__tag__spacer"></div>
                  <div className="event__tag__text">{event.tag}</div>
                </div>
              )
              : null}
          <div className="event__title">
            <div className="event__title__connector-line"></div>
            <div className="event__title__text">{event.title}</div>
          </div>
          <div className="event__description">{event.description}</div>
          <div className="event__date">{utils.formatDate(event.date)}</div>
        </div>
      </div>
    </>
  );
};

export default Event;
