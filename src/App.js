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
    </GlobalStateProvider>
  )
}
