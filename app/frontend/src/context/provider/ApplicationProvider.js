import PropTypes from 'prop-types';
import React from 'react';
import ApplicationContext from '../ApplicationContext';

function ApplicationProvider({ children }) {
  const contextValue = {};

  return (
    <ApplicationContext value={ contextValue }>
      {children}
    </ApplicationContext>
  );
}

ApplicationProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ApplicationProvider;
