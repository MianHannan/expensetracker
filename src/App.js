import React from 'react';

//Stylesheet
import './style.css';

//Components
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { Summary } from './components/Summary';
import { History } from './components/History';
import { AddTransaction } from './components/AddTransaction';

export const App = () => {
  return (
    <div>
      <Header />
      <div class="container">
        <Balance />
        <Summary />
        <History />
        <AddTransaction />
      </div>
    </div>
  )
}
