/* eslint-disable no-magic-numbers */
import React, { useContext, useEffect } from 'react';
import '../styles/YearIncome.css';
import coinsImg from '../images/coins.svg';
import ApplicationContext from '../context/ApplicationContext';

function YearIncome() {
  const {
    months,
    calculateTotalYearIncomes,
    selectedYear,
    totalYearIncomes,
    calculateAnnualGoal,
  } = useContext(ApplicationContext);

  useEffect(() => {
    calculateTotalYearIncomes();
  }, [months, selectedYear]);

  return (
    <div className="card1-year-income">
      <div className="card-header">
        <p className="card-title">Receita Total do Ano</p>
        <p className="card-title">Meta Anual</p>
      </div>
      <br />
      <div className="content-year-income-goal">
        <div className="img-and-income">
          <img src={ coinsImg } alt="yellow-coins" />
          {totalYearIncomes}
          &nbsp;R$
          &nbsp;
        </div>
        <div className="annual-goal">
          {calculateAnnualGoal()}
        </div>
      </div>
    </div>
  );
}

export default YearIncome;
