/* eslint-disable no-magic-numbers */
import React, { useContext, useEffect } from 'react';
import Marquee from 'react-fast-marquee';
import ApplicationContext from '../context/ApplicationContext';
import { getAllSellers } from '../services/requests';

function Sellers() {
  const {
    sellers,
    setSellers,
    // selectedSellers,
    // setSelectedSellers,
    // sellersToDisplay,
    // setSellersToDisplay,
  } = useContext(ApplicationContext);

  const getSellers = async () => {
    const { data: { data }, status } = await getAllSellers();
    if (status === 200) {
      setSellers(data);
    }
  };

  // const isSellersSelected = () => {
  //   if (selectedSellers.length) {
  //     console.log('lenght');
  //     setSellersToDisplay(selectedSellers);
  //   } else {
  //     console.log('nolength', sellers);
  //     setSellersToDisplay(sellers);
  //   }
  //   console.log('is? ', sellersToDisplay);
  // };

  useEffect(() => {
    getSellers();
  }, []);

  return (
    <div className="sellers-carousel-container">
      <Marquee className="sellers-carousel">
        {
          sellers.map((seller) => (
            <h4 key={ seller.id } style={ { margin: '0px' } }>
              {`${seller.fullname.split('/')[0]}`}
              &nbsp;*&nbsp;
            </h4>
          ))
        }
      </Marquee>
    </div>
  );
}

export default Sellers;
