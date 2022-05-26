import React from 'react';
import './styles/App.css';
import './styles/Header.css';
import ApplicationProvider from './context/provider/ApplicationProvider';
import {
  YearIncome,
  Fitlers, Header,
  Sellers,
  IncomesByFilter,
} from './components/index';

function App() {
  return (
    <ApplicationProvider>
      <Header />
      <Sellers />
      <Fitlers />
      <div className="App">
        <div className="row1">
          <YearIncome />
          <IncomesByFilter />
        </div>
      </div>
    </ApplicationProvider>
  );
}

export default App;
