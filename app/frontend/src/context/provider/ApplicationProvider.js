import PropTypes from 'prop-types';
import React, { useState } from 'react';
import ApplicationContext from '../ApplicationContext';

function ApplicationProvider({ children }) {
  const [year, setYear] = useState('2020');

  const contextValue = {
    year,
    setYear,
  };

  return (
    <ApplicationContext.Provider value={ contextValue }>
      {children}
    </ApplicationContext.Provider>
  );
}

ApplicationProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ApplicationProvider;
