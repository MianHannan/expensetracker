import React from 'react';
import { Transaction } from './Transaction';

import { GlobalContext } from '../context/GlobalState';

export const History = () => {

    const globalData = React.useContext(GlobalContext);
    return (
        <div>
            <h3>History</h3>
            <ul id="list" className="list">
                {globalData.transactions.map(transaction =>
                    <Transaction
                        key={transaction.id}
                        id={transaction.id}
                        text={transaction.text}
                        amount={transaction.amount}
                    />)}
            </ul>
        </div>
    )
}
