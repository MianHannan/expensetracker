import React from 'react';
import { Transaction } from './Transaction';

export const History = () => {
    return (
        <div>
            <h3>History</h3>
            <ul id="list" class="list">
                {/*Dummy Transactions

                <li className="minus">
                    Cash Out<span>-$400</span><button class="delete-btn">x</button>
                </li>
                <li className="plus">
                    Cash In<span>+$600</span><button class="delete-btn">x</button>
                </li>*/}

                <Transaction text="Cash In" amount="+$2020" />
                <Transaction text="Cash Out" amount="-$20" />

            </ul>
        </div>
    )
}
