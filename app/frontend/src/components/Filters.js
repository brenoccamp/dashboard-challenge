import React, { useContext, useEffect } from 'react';
import ApplicationContext from '../context/ApplicationContext';
import '../styles/Filters.css';

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

  const optionalMonths = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

  const handleMonths = ({ target }) => {
    let { value } = target;
    if (value.length === 1) value = `0${value}`;
    const selectedMonths = [...months, value];
    setMonths(selectedMonths);
  };

  const verifyEnableMonth = () => {
    if (Number(currentYear) > Number(selectedYear)) {
      console.log('entrou');
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
        {optionalMonths.map((month, index) => (
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
