import React from 'react';
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {

    //Input States
    const [text, setText] = React.useState("");
    const [value, setValue] = React.useState("");

    //Global State
    const globalData = React.useContext(GlobalContext);

    return (
        <div>
            <h3>Add new transaction</h3>
            <form id="form" onSubmit={e => {
                e.preventDefault();
                globalData.plusTransaction({
                    id: new Date().getTime(),
                    text: text,
                    amount: value
                });
                setText("");
                setValue("");
            }}>
                <div className="form-control">
                    <label htmlFor="text">Description</label>
                    <input type="text" required value={text} placeholder="Enter text..." onChange={e => setText(e.target.value)} />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Amount</label>
                    <input type="number" required value={value} placeholder="Enter value..." onChange={e => setValue(e.target.value)} />
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </div>
    )
}
