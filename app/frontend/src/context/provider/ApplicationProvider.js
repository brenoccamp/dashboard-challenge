import PropTypes from 'prop-types';
import React, { useState } from 'react';
import ApplicationContext from '../ApplicationContext';

function ApplicationProvider({ children }) {
  const [year, setYear] = useState('2020');
  const [sales, setSales] = useState([]);
  // const [filteredSales, setFilteredSales] = useState([]);

  const isYearValid = (salesData) => salesData.some((sale) => sale.saleDate
    .split('-')[0] === year);

  const contextValue = {
    year,
    setYear,
    sales,
    setSales,
    isYearValid,
    // filteredSales,
    // setFilteredSales,
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
