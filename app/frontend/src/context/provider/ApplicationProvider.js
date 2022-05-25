import PropTypes from 'prop-types';
import React from 'react';
import ApplicationContext from '../ApplicationContext';

function ApplicationProvider({ children }) {
  const contextValue = {};

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
