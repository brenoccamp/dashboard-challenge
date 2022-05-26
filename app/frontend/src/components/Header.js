/* eslint-disable react/jsx-max-depth */
/* eslint-disable no-magic-numbers */
import React, { useContext, useEffect } from 'react';
import '../styles/Header.css';
import dashLogo from '../images/dashboard-logo.svg';
import sellersImg from '../images/sellers.svg';
import ApplicationContext from '../context/ApplicationContext';
import { getAllSales, getAllStores } from '../services/requests';

function Header() {
  const {
    selectedYear,
    setSelectedYear,
    setStores,
    setSelectedStore,
    setSales,
    setChooseSeller,
    setSelectedSellers,
    sales,
    isYearValid,
    stores,
    chooseSeller,
    sellers,
    selectedStore,
    selectedSellers,
    calculateTotalIncomes,
    calculateIncomesByFilter,
  } = useContext(ApplicationContext);

  const handleSelectedYear = ({ target }) => {
    const { value } = target;

    setSelectedYear(value);
  };

  const getSales = async () => {
    const { data: { data }, status } = await getAllSales();

    if (status === 200) {
      setSales(data);
    }
  };

  const getStores = async () => {
    const { data: { data }, status } = await getAllStores();

    if (status === 200) {
      setStores(data);
    }
  };

  const handleSubmit = () => {
    getSales();
    const validYear = isYearValid(sales);
    if (!validYear) return alert('Nenhuma venda encontrada nesse ano.');

    const salesByYear = sales.filter((sale) => sale.saleDate
      .split('-')[0] === selectedYear);

    setSales(salesByYear);
  };

  const showSellersOnModal = () => {
    const availableSellers = sellers
      .filter((seller) => Number(seller.storeId) === Number(selectedStore.split('-')[1]));

    return availableSellers;
  };

  const defineSellers = ({ target }) => {
    const { value } = target;
    let newSelectedSellers = [];

    if (selectedSellers.includes(value)) {
      newSelectedSellers = selectedSellers
        .filter((sellerId) => Number(sellerId) !== Number(value));

      return setSelectedSellers(newSelectedSellers);
    }

    newSelectedSellers = [...selectedSellers, value];
    setSelectedSellers(newSelectedSellers);
  };

  useEffect(() => {
    getSales();
    getStores();
  }, []);

  const classNameModal = chooseSeller
    ? 'modal show'
    : 'modal';

  return (
    <header className="header">
      <div className={ classNameModal } tabIndex="-1">
        <div className="modal-dialog modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Selecione os(as) Vendedores(as)</h5>
            </div>
            <div className="modal-body">
              {showSellersOnModal().map((seller) => (
                <label
                  className="seller-label-checkbox"
                  htmlFor={ `checkbox-${seller.fullname}` }
                  key={ seller.id }
                >
                  <input
                    type="checkbox"
                    value={ seller.id }
                    name={ seller }
                    id={ `checkbox-${seller.fullname}` }
                    onClick={ (event) => defineSellers(event) }
                  />
                  <p value={ seller.fullname }>{seller.fullname}</p>
                </label>
              ))}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                onClick={ () => {
                  setChooseSeller(false);
                  calculateTotalIncomes();
                  calculateIncomesByFilter();
                } }
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      </div>
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
      <div className="store-container">
        <label htmlFor="stores">
          <select
            className="select-store"
            id="stores"
            onChange={ (event) => {
              setSelectedStore(event.target.value);
              setSelectedSellers([]);
            } }
          >
            {stores.map((store, index) => (
              <option
                value={ `${store.city}-${store.id}` }
                key={ index }
              >
                {`${store.name} - ${store.city}/${store.state}`}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div className="select-sellers-container">
        <p>Vendedores</p>
        <button
          type="button"
          className="sellers-btn"
          onClick={ () => setChooseSeller(true) }
        >
          <img src={ sellersImg } alt="sellers-icon-svg" />
        </button>
      </div>
      <div className="year-filter">
        ANO
        <input
          type="number"
          className="input-year"
          defaultValue={ selectedYear }
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
