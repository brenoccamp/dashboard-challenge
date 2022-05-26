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
  const [stores, setStores] = useState([]);
  const [selectedStore, setSelectedStore] = useState('Cuiabá-1');
  const [sellers, setSellers] = useState([]);
  const [selectedSellers, setSelectedSellers] = useState([]);
  const [sellersToDisplay, setSellersToDisplay] = useState([]);
  const [chooseSeller, setChooseSeller] = useState(false);

  const isYearValid = (salesData) => salesData.some((sale) => sale.saleDate
    .split('-')[0] === selectedYear);

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
    stores,
    setStores,
    selectedStore,
    setSelectedStore,
    sellers,
    setSellers,
    selectedSellers,
    setSelectedSellers,
    sellersToDisplay,
    setSellersToDisplay,
    chooseSeller,
    setChooseSeller,
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
