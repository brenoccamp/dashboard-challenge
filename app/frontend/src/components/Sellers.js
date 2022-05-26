/* eslint-disable no-magic-numbers */
import React, { useContext, useEffect } from 'react';
import Marquee from 'react-fast-marquee';
import ApplicationContext from '../context/ApplicationContext';
import { getAllSellers } from '../services/requests';

function Sellers() {
  const {
    sellers,
    setSellers,
    selectedSellers,
    selectedStore,
  } = useContext(ApplicationContext);

  const getSellers = async () => {
    const { data: { data }, status } = await getAllSellers();
    if (status === 200) {
      setSellers(data);
    }
  };

  useEffect(() => {
    getSellers();
  }, []);

  const sellersToShowOnCarousel = () => {
    const sellersByStore = sellers
      .filter(({ storeId }) => String(storeId) === selectedStore.split('-').pop());
    if (selectedSellers.length) {
      return sellers.filter((seller) => selectedSellers.includes(String(seller.id)));
    }
    return sellersByStore;
  };

  return (
    <div className="sellers-carousel-container">
      <Marquee className="sellers-carousel">
        {
          sellersToShowOnCarousel().map((seller) => (
            <h4 key={ seller.id } style={ { margin: '0px' } }>
              {`${seller.fullname}`}
              &nbsp;*&nbsp;
            </h4>
          ))
        }
      </Marquee>
    </div>
  );
}

export default Sellers;
