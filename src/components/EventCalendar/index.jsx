import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Calendar.css';
import { Icon, IconIdentifier } from '../../components';

const EventCalendar = () => {
  const [selectedDate, setSelectedDate] = useState();
  const [showCalendar, setShowCalendar] = useState(false);

  const handleDateChange = (value) => {
    setSelectedDate(value);
  };

  const handleCalendarClick = () => {
    setShowCalendar(!showCalendar);
  };

  const tileClassName = ({ date }) => {
    const currentDate = new Date();
    const currentWeekStart = getWeekStart(currentDate);
    const currentWeekEnd = getWeekEnd(currentDate);

    if (date >= currentWeekStart && date <= currentWeekEnd) {
      return 'current-week';
    }

    return '';
  };

  const getWeekStart = (date) => {
    const day = date.getDay();
    const diff = date.getDate() - day + (day === 0 ? -6 : 1); 
    return new Date(date.getFullYear(), date.getMonth(), diff);
  };

  const getWeekEnd = (date) => {
    const startOfWeek = getWeekStart(date);
    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(endOfWeek.getDate() + 6); 
    return endOfWeek;
  };

  return (
    <div className="Calendar">
        <button className='calendar-button' onClick={handleCalendarClick}>
        <Icon iconIdentifier={IconIdentifier.Calendar} />
      </button>
      {showCalendar && (
        <div className="calendar-container">
          <Calendar
            onChange={handleDateChange}
            value={selectedDate}
            tileClassName={tileClassName}
            nextLabel={
              <Icon
                className="chevron-right-padding"
                iconIdentifier={IconIdentifier.ChevronRight}
              />
            }
            prevLabel={
              <Icon
                className="chevron-right-padding"
                iconIdentifier={IconIdentifier.ChevronLeft}
              />
            }
          />
        </div>
      )}
    </div>

  );
};

export default EventCalendar;


