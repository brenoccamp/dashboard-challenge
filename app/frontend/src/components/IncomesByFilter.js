import React, { useContext, useEffect } from 'react';
import ApplicationContext from '../context/ApplicationContext';
import coinsImg from '../images/coins.svg';

function IncomesByFilter() {
  const {
    calculateIncomesByFilter,
    selectedYear,
    sellersSelected,
    months,
    totalncomesByFilter,
  } = useContext(ApplicationContext);

  useEffect(() => {
    calculateIncomesByFilter();
  }, [selectedYear, sellersSelected, months]);

  return (
    <div className="card1-year-income">
      <div className="card-header">
        <p className="card-title">Receita de Vendas Filtradas</p>
      </div>
      <br />
      <div className="content-year-income-goal">
        <div className="annual-goal">
          <img src={ coinsImg } alt="yellow-coins" />
          {totalncomesByFilter}
          &nbsp;R$
        </div>
      </div>
    </div>
  );
}

export default IncomesByFilter;
