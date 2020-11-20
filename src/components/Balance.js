import React from 'react'

import { GlobalContext } from '../context/GlobalState'

export const Balance = () => {

    const globalData = React.useContext(GlobalContext);
    const amounts = globalData.transactions.map(transaction => transaction.amount);
    const balance = amounts.reduce((total, amount) => (total += (amount * 1)), 0).toFixed(2);

    return (
        <div>
            <h4>Your Balance</h4>
            <h1 id="balance">${balance}</h1>
        </div>
    )
}
