import React, { useContext, useEffect } from 'react';
import ApplicationContext from '../context/ApplicationContext';
import '../styles/Filters.css';
import yearMonths from '../services/monthsArray';

function Fitlers() {
  const {
    months,
    setMonths,
    selectedYear,
    currentYear,
    currentMonth,
    setCurrentMonth,
    currentFullDate,
  } = useContext(ApplicationContext);

  const handleMonths = ({ target }) => {
    let selectedMonths = [...months];
    let { value } = target;

    if (value.length === 1) value = `0${value}`;
    if (!months.includes(value)) {
      selectedMonths = [...months, value];
    } else {
      selectedMonths = selectedMonths.filter((month) => month !== value);
    }
    setMonths(selectedMonths);
  };

  const verifyEnableMonth = () => {
    if (Number(currentYear) > Number(selectedYear)) {
      setCurrentMonth('12');
    } else if (Number(currentYear) === Number(selectedYear)) {
      setCurrentMonth(currentFullDate.split('/')[1]);
    } else {
      setCurrentMonth(0);
    }
  };

  useEffect(() => {
    verifyEnableMonth();
  }, [selectedYear]);

  return (
    <div className="month-filters">
      <div className="month-labels-container">
        {yearMonths.map((month, index) => (
          <label
            className="month-checkbox-label"
            htmlFor={ `checkbox-${index}` }
            key={ index }
          >
            <p value={ month }>{month}</p>
            <input
              type="checkbox"
              value={ index + 1 }
              name={ month }
              id={ `checkbox-${index}` }
              onClick={ (event) => handleMonths(event) }
              disabled={ index >= Number(currentMonth) }
            />
          </label>
        ))}
      </div>
    </div>
  );
}

export default Fitlers;
