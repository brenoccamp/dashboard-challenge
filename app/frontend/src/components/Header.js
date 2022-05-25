/* eslint-disable no-magic-numbers */
import React, { useContext, useEffect } from 'react';
import '../styles/Header.css';
import dashLogo from '../images/dashboard-logo.svg';
import ApplicationContext from '../context/ApplicationContext';
import getAllSales from '../services/requests';

function Header() {
  const {
    setYear,
    sales,
    setSales,
    isYearValid,
    setFilteredSales,
  } = useContext(ApplicationContext);

  const handleSelectedYear = ({ target }) => {
    const { value } = target;

    setYear(value);
  };

  const getSales = async () => {
    const { data, status } = await getAllSales();
    if (status === 200) {
      setSales(data);
    }
  };

  const handleSubmit = () => {
    const validYear = isYearValid(sales.data);
    if (!validYear) return alert('Por favor selecione um ano válido.');
    // const filteredSales = getSales();
    setFilteredSales();
  };

  useEffect(() => {
    getSales();
  }, []);

  return (
    <header className="header">
      <div className="logo-name-slogan-container">
        <img src={ dashLogo } alt="company-logo" />
        <div className="name-slogan-container">
          <p className="company-name">MEGA CAR</p>
          <p className="company-slogan">Soluções Inteligentes</p>
        </div>
      </div>
      <div className="page-title-container">
        <p>DASHBOARD DE VENDAS</p>
      </div>
      <div className="year-filter">
        ANO
        <input
          type="number"
          className="input-year"
          onChange={ (e) => handleSelectedYear(e) }
        />
        <button
          type="button"
          onClick={ handleSubmit }
        >
          Filtrar
        </button>
      </div>
    </header>
  );
}

export default Header;
