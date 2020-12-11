import React from 'react'
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import './style.css'

export const Transaction = ({transaction}) => {
    const sign = transaction.amount < 0 ? '-' : '+'
    return (
        <TableRow key={transaction.id} className={transaction.amount < 0 ? 'minus' : 'plus'}>
            <TableCell component="th" scope="row">
            {transaction.text}
            </TableCell>
            
            <TableCell align="right"> {sign} ${Math.abs(transaction.amount)}</TableCell>
              
        </TableRow>
    )
}