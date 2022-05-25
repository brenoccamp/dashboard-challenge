import PropTypes from 'prop-types';
import React from 'react';
import '../styles/YearIncome.css';
import coinsImg from '../images/coins.svg';

function YearIncome({ totalIncome }) {
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
          {totalIncome}
          &nbsp;
        </div>
        <div>
          {/* CHART HERE */}
        </div>
      </div>
    </div>
  );
}

YearIncome.propTypes = {
  totalIncome: PropTypes.number.isRequired,
};

export default YearIncome;
