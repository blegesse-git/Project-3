import React from 'react';
import { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import Container from '../components/Container';
import InvoiceForm from "../components/InvoiceForm/InvoiceForm"
import InvoiceViewer from "../components/InvoiceViewer/InvoiceViewer"

import "./invoice.css"

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        }
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }
}));

export default function Invoice() {
    const classes = useStyles();

    const [invoices, SetInvoices] = useState([
        {
            id: 1,
            titleName: "Worsham",
            invoiceDate: "12/11/2020",
            firstName: "Lisa",
            lastName: "Worsham",
            address1: "13 Dead End Dr",
            address2: "Apt 333",
            city: "Houston",
            state: "TX",
            zip: "77095",
            summary: "did the deed",
            amountDue: "$1000"
        }
    ]);

    const addInvoice = (invoiceData) => {
        const newInvoice = {
            id: 2,
            titleName: invoiceData.firstName + " " + invoiceData.lastName,
            ...invoiceData
            // invoiceDate: invoiceData.invoiceData,
            // firstName: invoiceData.firstName,
            // lastName: text,
            // address1: text,
            // address2: text,
            // city: text,
            // state: text,
            // zip: text,
            // summary: text,
            // amountDue: text
        }

    SetInvoices([...invoices, newInvoice])
    };

    return (
        <Container>
            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={12} >
                        <Paper className={classes.paper}><h1>Invoices</h1></Paper>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Paper className={classes.paper}><h2>Create Invoice</h2>
                            <InvoiceForm  addInvoice={addInvoice} />
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Paper className={classes.paper} id="Invoices">
                            <Typography variant="h6" className={classes.title}>
                                My Invoices
                            </Typography>
                            <InvoiceViewer invoices={invoices} />
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        </Container>
    )
}