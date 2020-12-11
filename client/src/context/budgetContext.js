import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer'

const initialState = {
    transactions : [
        { id: 1, text: 'Flowers', amount: -232.43},
        { id: 2, text: 'Food', amount: -123.23},
        { id: 3, text: 'Budget Increase', amount: 700.00},
        { id: 4, text: 'Cake', amount: -143.22},
        { id: 5, text: 'Games', amount: -142.12}

    ]
}




export const BudgetContext = createContext(initialState);

export const BudgetProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    function addTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        })
    }

    return (
        <BudgetContext.Provider value = {{
            transactions: state.transactions,
            addTransaction
        }}>
        {children}
        </BudgetContext.Provider>)
    
}