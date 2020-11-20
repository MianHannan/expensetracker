import React from 'react'
import { GlobalContext } from '../context/GlobalState'

export const Summary = () => {

    const globalData = React.useContext(GlobalContext);

    const plusObjArr = globalData.transactions.filter(transaction => transaction.amount > -1);//
    const plusNumArr = plusObjArr.map(item => item.amount);
    const plus = plusNumArr.reduce((total, number) => total += (number * 1), 0).toFixed(2);

    const minusObjArr = globalData.transactions.filter(transaction => transaction.amount < 0);//
    const minusNumArr = minusObjArr.map(item => item.amount);
    const minus = minusNumArr.reduce((total, number) => total += (number * 1), 0).toFixed(2);

    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p id="money-plus" className="money plus">+${Math.abs(plus)}</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p id="money-minus" className="money minus">-${Math.abs(minus)}</p>
            </div>
        </div>
    )
}
