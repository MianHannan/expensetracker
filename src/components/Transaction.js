import React from 'react'

export const Transaction = (props) => {
    return (
        <li className={props.amount[0] === "-" ? "minus" : "plus"}>
            {props.text}<span>{props.amount}</span><button class="delete-btn">x</button>
        </li>
    )
}
