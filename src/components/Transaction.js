import React from 'react'

import { GlobalContext } from '../context/GlobalState';

export const Transaction = (props) => {

    const globalData = React.useContext(GlobalContext);
    let sign = props.amount.toString()[0] === "-" ? "-" : "+";
    return (
        <li className={sign === "-" ? "minus" : "plus"} >
            {props.text}<span>{sign + "$" + Math.abs(props.amount)}</span><button
                className="delete-btn"
                onClick={e => globalData.delTransaction(props.id)}
            >x</button>
        </li>
    )
}
