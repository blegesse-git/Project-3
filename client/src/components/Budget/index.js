import React, {useState, useContext, createContext, useReducer} from 'react'
import AppReducer from '../../context/AppReducer'
import OutlinedButtons from '../../components/Submit Button'
import Transaction from '../Transaction/index';
import EventsService from '../../services/events';
import "./style.css"
import { InputLabel, TextField } from '@material-ui/core'
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import { makeStyles } from '@material-ui/core/styles';

import { BudgetContext } from '../../context/budgetContext';
import API from '../../utils/API'


const Budget = (props) => {
    const useStyles = makeStyles((theme) => ({
        root: {
            '& > *': {
                margin: theme.spacing(1),
                width: '45ch',
            },
    
        },
        button: {
            backgroundColor: '#e94837',
            '&:hover': {
                backgroundColor: "lightgrey",
    
            }
        }
    }));
    
    const [text, setText] = useState('')
    const [amount, setAmount] = useState(0);
    const [budget, setBudget] = useState(props.eventState.eventBudget || 0);
    const [transactions, setTransactions] = useState(
        props.eventState.transactions || [],
    );
    

    const calculateTotalExpenses = (incomingTransactions) => {
        return incomingTransactions
            .filter((transaction) => transaction.amount < 0)
            .reduce(
                (acc, current) => acc + current.amount,
                0,
            );
    };

    const incomingBudget = props.eventState.eventBudget || 0;

    const initialTotalExpenses = calculateTotalExpenses(props.eventState.transactions || []);

    const [totalExpenses, setTotalExpenses] = useState(initialTotalExpenses);
    const [balance, setBalance] = useState(incomingBudget + initialTotalExpenses);
   
    const onSubmit = async e => {
        e.preventDefault();
        const response = await EventsService.addTransaction(props.eventState._id, text, amount);

        setBudget(response.data[0].eventBudget || 0);

        const newTransactions = response.data[0].transactions || [];
        setTransactions(newTransactions);

        const updatedTotalExpenses = calculateTotalExpenses(newTransactions);
        const budget = response.data[0].eventBudget || 0;

        setTotalExpenses(updatedTotalExpenses);
        setBalance(budget - ((-1) * updatedTotalExpenses));
        setText('');
        setAmount(0);
    }
    const classes = useStyles();
    return (
        <div>
            
            <h2 >Budget: ${budget}</h2>
            
            <h3 id="balance">Current Balance: ${balance}</h3>
            
            <h3 id="expense">Expenses: ${totalExpenses}</h3>
            <div id="budgetInput">
                
                <form onSubmit={onSubmit}>
                    <TextField label="Enter Description" value = {text} onChange = {(e) => setText(e.target.value)}/>
                    <TextField label="Enter Amount (- or +)" value = {amount} onChange = {(e) => setAmount(e.target.value)}/>
                    {/* <br></br> */}
                    
                    <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    className={classes.button}
                    startIcon={<SaveIcon />}
                    type="submit"
                >
                    Save
                </Button>
                </form>
                <Transaction transactionState={{ transactions }} />

            </div>

            
        </div>
    )
}

export default Budget;