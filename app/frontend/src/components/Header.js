import React, { useContext } from 'react';
import '../styles/Header.css';
import dashLogo from '../images/dashboard-logo.svg';
import ApplicationContext from '../context/ApplicationContext';

function Header() {
  const { setYear } = useContext(ApplicationContext);

  const handleSelectedYear = ({ target }) => {
    const { value } = target;

    setYear(value);
  };

  // const handleSubmit = ({ target }) => {

  // };

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
          // onClick={ (e) => handleSubmit(e) }
        >
          Filtrar
        </button>
      </div>
    </header>
  );
}

export default Header;
