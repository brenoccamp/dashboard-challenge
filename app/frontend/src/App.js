import React from 'react';
import './styles/App.css';
import './styles/Header.css';
import ApplicationProvider from './context/provider/ApplicationProvider';
import { YearIncome, Fitlers, Header, Sellers } from './components/index';

function App() {
  return (
    <ApplicationProvider>
      <Header />
      <Sellers />
      <Fitlers />
      <div className="App">
        <div className="row1">
          <YearIncome totalIncome="999.560.390,00" />
        </div>
      </div>
    </ApplicationProvider>
  );
}

export default App;
