import React from 'react'

export const AddTransaction = () => {
    return (
        <div>
            <h3>Add new transaction</h3>
            <form id="form">
                <div className="form-control">
                    <label for="text">Description</label>
                    <input type="text" id="text" placeholder="Enter text..." />
                </div>
                <div class="form-control">
                    <label for="amount">Amount</label>
                    <input type="number" id="amount" placeholder="Enter value..." />
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </div>
    )
}
