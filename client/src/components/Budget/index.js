import React, {useState, useContext, createContext, useReducer} from 'react'
import AppReducer from '../../context/AppReducer'
import OutlinedButtons from '../../components/Submit Button'
import Transaction from '../Transaction'
import "./style.css"
import { InputLabel, TextField } from '@material-ui/core'

import { BudgetContext } from '../../context/budgetContext';

const Budget = () => {
    
    const [text, setText] = useState('')
    const [amount, setAmount] = useState()

    const initialState = {
        transactions : [
            { id: 1, text: 'Flowers', amount: -232.43},
            { id: 2, text: 'Food', amount: -123.23},
            { id: 3, text: 'Budget Increase', amount: 700.00},
            { id: 4, text: 'Cake', amount: -143.22},
            { id: 5, text: 'Games', amount: -142.12}
    
        ]
    }
    
    
    
    
     const BudgetContext = createContext(initialState);
    
    
        const [state, dispatch] = useReducer(AppReducer, initialState);
    
        function addTransaction(transaction) {
            dispatch({
                type: 'ADD_TRANSACTION',
                payload: transaction
            })
        }
    
    // const {transactions} = useContext(BudgetContext)
    const amounts = state.transactions.map(transaction=> transaction.amount)
    const balance = amounts.reduce( (acc, item) => (acc += item), 0).toFixed(2)

    const budget = amounts 
    .filter(item => item > 0)
    .reduce( (acc, item) => (acc += item), 0)
    .toFixed(2)

    const expense = ( amounts.filter(item => item < 0 ).reduce((acc, item) => (acc += item), 0 ) * -1 ).toFixed(2)
   
    // const  addTransaction  = useContext(BudgetContext) 
    const onSubmit = e => {
        e.preventDefault()
    
        const newTransaction = {
            id: Math.floor(Math.random() * 1000000),
            text, 
            amount: +amount
        }

        addTransaction(newTransaction)
        
    }

    return (
        <div>
            
            <h2 >Budget: ${budget}</h2>
            
            <h3 id="balance">Current Balance: ${balance}</h3>
            
            <h3 id="expense">Expenses: ${expense}</h3>
            <div id="budgetInput">
                
                <form onSubmit={onSubmit}>
                    <TextField label="Enter Description" value = {text} onChange = {(e) => setText(e.target.value)}/>
                    <TextField label="Enter Amount (- or +)" value = {amount} onChange = {(e) => setAmount(e.target.value)}/>
                    <button id="enter">Enter</button>
                </form>
                <Transaction transactionState={state} />

            </div>

            
        </div>
    )
}

export default Budget;