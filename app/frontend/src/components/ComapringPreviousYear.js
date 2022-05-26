import React, { useContext } from 'react';
import ApplicationContext from '../context/ApplicationContext';

function ComparingPreviousYear() {
  const {
    currentYear,
    sales,
  } = useContext(ApplicationContext);

  const previousYearIncomes = () => {
    const previousYear = currentYear - 1;

    const prevIncomes = sales
      .reduce((acc, currSale) => {
        if (currSale.saleDate.split('-')[0] === previousYear) {
          acc += Number(currSale.product_serivce.price) * Number(currSale.soldAmount);
        }
        return acc;
      }, 0);
    return prevIncomes;
  };

  return (
    <div className="card">
      <p>{`Receita do ano Anterior: ${previousYearIncomes()}`}</p>
    </div>
  );
}

export default ComparingPreviousYear;
