import React from 'react';

//initialState
const initialState = {
    transactions: [
        { id: 1, text: 'Flower', amount: -20 },
        { id: 2, text: 'Salary', amount: 300 },
        { id: 3, text: 'Book', amount: -10 },
        { id: 4, text: 'Camera', amount: 150 }
    ]
};

export const GlobalContext = React.createContext(initialState);

export const GlobalStateProvider = ({ children }) => {

    const [state, dispatch] = React.useReducer((state, action) => {
        switch (action.type) {
            case "ADD":
                return { transactions: [...state.transactions, action.transaction] }
            case "DEL":
                return { transactions: state.transactions.filter(tr => tr.id !== action.id) }
            default:
                return state;
        }
    }, initialState)

    function plusTransaction(transaction) {
        dispatch({ type: "ADD", transaction: transaction });
    }

    function delTransaction(id) {
        dispatch({ type: "DEL", id: id });
    }

    return (
        <GlobalContext.Provider value={{
            transactions: state.transactions,
            plusTransaction,
            delTransaction
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

