import React from 'react';

//Stylesheet
import './style.css';

//Components
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { Summary } from './components/Summary';
import { History } from './components/History';
import { AddTransaction } from './components/AddTransaction';
import { GlobalStateProvider } from './context/GlobalState';

export const App = () => {
  return (
    <GlobalStateProvider id="proper">
      <Header />
      <div className="container">
        <Balance />
        <Summary />
        <History />
        <AddTransaction />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <a href="https://mianhannan.github.io/covid19tracker">Covid19 Tracker </a>
          Developed with ❤ by
          <a href="https://mianhannan.github.io"> Mian Hannan</a>
      </div>
    </GlobalStateProvider>
  )
}
