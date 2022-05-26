/* eslint-disable no-magic-numbers */
import React, { useContext, useEffect } from 'react';
import ApplicationContext from '../context/ApplicationContext';
import yearMonths from '../services/monthsArray';
import '../styles/MonthlySales.css';

function MonthlySales() {
  const {
    salesByMonth,
    selectedYear,
  } = useContext(ApplicationContext);

  useEffect(() => {

  }, [selectedYear]);

  return (
    <div className="card">
      <div className="card-header">
        <p className="p-title">Vendas Mensais</p>
      </div>
      <br />
      <div className="monthly-sales-container">
        {yearMonths.map((month, index) => {
          if (index < 10) {
            return (
              <div
                key={ `${month}-${index}` }
                className="month-value"
              >
                <p
                  className="p-value"
                >
                  {`${month}: ${salesByMonth()[`0${index + 1}`] || 0} R$`}
                </p>
              </div>
            );
          }
          return (
            <div
              key={ `${month}-${index}` }
              className="month-value"
            >
              <p>{`${month} ${salesByMonth()[index + 1] || 0} R$`}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MonthlySales;
