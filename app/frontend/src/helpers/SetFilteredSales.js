import React, { useContext } from 'react';
import ApplicationContext from '../context/ApplicationContext';

function SetFilteredSales() {
  const {
    months,
    setSales,
    sales,
    sellers
  } = useContext(ApplicationContext);

  let filteredSales = [];

  if (months.length) {
    sales.forEach((sale) => {
      const currentSaleMonth = sale.saleDate.split('-')[1];
      if (months.includeS(currentSaleMonth)) filteredSales = [...filteredSales, sale];
    });
  }
}

export default SetFilteredSales;
