import PropTypes from 'prop-types';
import React, { useState } from 'react';
import ApplicationContext from '../ApplicationContext';

function ApplicationProvider({ children }) {
  const currentDate = new Date().toLocaleDateString();

  const [selectedYear, setSelectedYear] = useState('2021');
  const [sales, setSales] = useState([]);
  const [months, setMonths] = useState([]);
  const [currentMonth, setCurrentMonth] = useState(currentDate.split('/')[1]);
  const [currentYear, setCurrentYear] = useState(currentDate.split('/')[2]);
  const [currentFullDate, setCurrentFullDate] = useState(currentDate);

  const isYearValid = (salesData) => salesData.some((sale) => sale.saleDate
    .split('-')[0] === year);

  const contextValue = {
    selectedYear,
    setSelectedYear,
    sales,
    setSales,
    isYearValid,
    months,
    setMonths,
    currentYear,
    setCurrentYear,
    currentMonth,
    setCurrentMonth,
    currentFullDate,
    setCurrentFullDate,
  };

  return (
    <ApplicationContext.Provider value={ contextValue }>
      {children}
    </ApplicationContext.Provider>
  );
}

ApplicationProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ApplicationProvider;
