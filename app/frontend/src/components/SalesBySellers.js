import React, { useContext, useEffect } from 'react';
import ApplicationContext from '../context/ApplicationContext';
import '../styles/YearIncome.css';

function SalesBySellers() {
  const {
    selectedSellers,
    sellers,
    sales,
    selectedStore,
  } = useContext(ApplicationContext);

  const salesBySeller = (seller) => {
    const totalIncomeBySeller = sales.reduce((acc, currSale) => {
      if (Number(currSale.sellerId) === Number(seller.id)) {
        acc += Number(currSale.product_service.price) * Number(currSale.soldAmount);
      }
      return acc;
    }, 0);

    return totalIncomeBySeller;
  };

  useEffect(() => {
  }, [selectedSellers]);

  return (
    <div className="card">
      <div className="card-header">
        <p>Vendas por Vendedor</p>
      </div>
      <div>
        {sellers.filter((seller) => {
          if (selectedSellers.length) {
            return selectedSellers.includes(String(seller.id));
          }
          return String(seller.storeId) === selectedStore.split('-')[1];
        })
          .map((filteredSeller) => (
            <div key={ filteredSeller.id }>
              {filteredSeller.fullname}
              :&nbsp;
              {`${salesBySeller(filteredSeller)} R$`}
            </div>
          ))}
      </div>
    </div>
  );
}

export default SalesBySellers;
