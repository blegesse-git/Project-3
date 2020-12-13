import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { BudgetContext } from '../../context/budgetContext';
import { Transaction } from '../../components/transaction/transactionList'


const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});



export default function AcccessibleTable(props) {
  const classes = useStyles();

  const {transactions} = useContext(BudgetContext)
  
    console.log(props.transactionState)
  

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="caption table">
        <caption>Red is expenses and green is income</caption>
        <TableHead>
          <TableRow>
            <TableCell>Description</TableCell>
            <TableCell align="right">Amount</TableCell>
            <TableCell align="right">Date</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {props.transactionState.transactions.map((transaction) => (
            <Transaction key={transaction.id} transaction={transaction} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
