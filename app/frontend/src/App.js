import React from 'react';
import './styles/App.css';
import './styles/Header.css';
import ApplicationProvider from './context/provider/ApplicationProvider';
import YearIncome from './components';

function App() {
  return (
    <ApplicationProvider>
      <header className="header">Header</header>
      <div className="App">
        <YearIncome totalIncome="560.390,00" />
      </div>
    </ApplicationProvider>
  );
}

export default App;
