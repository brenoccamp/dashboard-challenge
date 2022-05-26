/* eslint-disable no-magic-numbers */
import React, { useContext, useEffect } from 'react';
import '../styles/YearIncome.css';
import Chart from 'react-apexcharts';
import coinsImg from '../images/coins.svg';
import ApplicationContext from '../context/ApplicationContext';

function YearIncome() {
  const {
    months,
    calculateTotalIncomes,
    totalYearIncomes,
  } = useContext(ApplicationContext);

  const state = {
    options: {
      colors: ['#546E7A', '#008000'],
      plotOptions: {
        pie: {
          expandOnClick: false,
          donut: {
            labels: {
              show: true,
              total: {
                show: true,
                showAlways: true,
              },
            },
          },
        },
      },
      legend: {
        show: false,
      },
    },
    series: [5, 10],
    labels: ['Vendas', 'Meta Anual'],
  };

  const series = [5, 10];

  useEffect(() => {
    calculateTotalIncomes();
  }, [months]);

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
          &nbsp;
        </div>
        <div>
          <Chart
            options={ state.options }
            series={ series }
            type="donut"
            width="180"
          />
        </div>
      </div>
    </div>
  );
}

export default YearIncome;
