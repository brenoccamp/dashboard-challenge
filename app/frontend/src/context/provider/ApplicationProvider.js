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
  const [filteredSales, setFilteredSales] = useState([]);
  const [totalYearIncomes, setTotalYearIncomes] = useState(0);
  const [totalncomesByFilter, setIncomesByFilter] = useState(0);

  const isYearValid = (salesData) => salesData.some((sale) => sale.saleDate
    .split('-')[0] === selectedYear);

  function buildSelectedSalesArray() {
    let treatedSales = sales;

    treatedSales = sales.filter((sale) => sale.saleDate.split('-')[0] === selectedYear);
    if (selectedSellers.length) {
      treatedSales = treatedSales
        .filter((sale) => selectedSellers.includes(String(sale.sellerId)));
    }
    if (months.length) {
      treatedSales = treatedSales
        .filter((sale) => months.includes(sale.saleDate.split('-')[1]));
    }
    return treatedSales;
  }

  const calculateTotalYearIncomes = () => {
    const totalIncomes = sales.reduce((incomeSum, currSale) => {
      incomeSum += (currSale.product_service.price * currSale.soldAmount);
      return incomeSum;
    }, 0);

    setTotalYearIncomes(totalIncomes);
  };

  const calculateIncomesByFilter = () => {
    const annualIncomesByFilter = buildSelectedSalesArray()
      .reduce((incomeSum, currSale) => {
        incomeSum += (currSale.product_service.price * currSale.soldAmount);
        return incomeSum;
      }, 0);

    setIncomesByFilter(annualIncomesByFilter);
  };

  const calculateAnnualGoal = () => {
    const previousYear = selectedYear - 1;
    const previousYearSales = filteredSales.filter((sale) => sale.saleDate
      .split('-')[0] === previousYear)
      .sort((a, b) => a.saleDate.split('-')[1] - b.saleDate.split('-')[1]);

    const previousYearIncome = previousYearSales.reduce((incomeSum, currSale) => {
      incomeSum += (currSale.product_service.price * currSale.soldAmount);
      return incomeSum;
    }, 0);

    const estimatedGrowth = 1.20;

    return (previousYearIncome * estimatedGrowth);
  };

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
    filteredSales,
    setFilteredSales,
    buildSelectedSalesArray,
    totalYearIncomes,
    setTotalYearIncomes,
    calculateTotalYearIncomes,
    calculateAnnualGoal,
    calculateIncomesByFilter,
    totalncomesByFilter,
    setIncomesByFilter,
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
