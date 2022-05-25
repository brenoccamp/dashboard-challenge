import React from 'react';
import '../styles/Header.css';
import dashLogo from '../images/dashboard-logo.svg';

function Header() {
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
        />
        <button
          type="button"
        >
          Filtrar
        </button>
      </div>
    </header>
  );
}

export default Header;
