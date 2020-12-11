import React, {useState, useContext} from 'react'
import OutlinedButtons from '../../components/Submit Button'
import Transaction from '../../components/transaction'
import "./style.css"
import { InputLabel, TextField } from '@material-ui/core'

import { BudgetContext } from '../../context/budgetContext';

const Budget = () => {
    
    const [text, setText] = useState('')
    const [amount, setAmount] = useState()

    
    const {transactions} = useContext(BudgetContext)
    const amounts = transactions.map(transaction=> transaction.amount)
    const balance = amounts.reduce( (acc, item) => (acc += item), 0).toFixed(2)

    const budget = amounts 
    .filter(item => item > 0)
    .reduce( (acc, item) => (acc += item), 0)
    .toFixed(2)

    const expense = ( amounts.filter(item => item < 0 ).reduce((acc, item) => (acc += item), 0 ) * -1 ).toFixed(2)
   
    const { addTransaction } = useContext(BudgetContext) 
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
                    <button>Enter</button>
                </form>
                <Transaction />

            </div>

            
        </div>
    )
}

export default Budget;