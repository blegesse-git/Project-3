import React from 'react';
import { useEffect, useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import Container from '../components/Container';
import InvoiceForm from "../components/InvoiceForm/InvoiceForm"
import InvoiceViewer from "../components/InvoiceViewer/InvoiceViewer"
import EventTabs from "../components/Navbar/EventTabs"
import Api from '../utils/API';

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

export default function Invoice(props) {
    const classes = useStyles();

    const [invoices, SetInvoices] = useState([]);

    const fetchInvoices = async () => {
        const results = await Api.getAllInvoices();
        SetInvoices(results.data);
    };

    useEffect(
        () => fetchInvoices(),
        [],
    );

    // const addInvoice = (invoiceData) => {
    //     const newInvoice = {
    //         id: 2,
    //         titleName: invoiceData.firstName + " " + invoiceData.lastName,
    //         ...invoiceData,
    //     }

    // SetInvoices([...invoices, newInvoice])
    // };

    return (
      <div>
        <EventTabs/>
        <Container>
            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={12} >
                        <Paper className={classes.paper}><h1> {props.eventState.eventName} 's Invoices</h1></Paper>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Paper className={classes.paper}><h2>Create Invoice</h2>
                            <InvoiceForm  fetchInvoices={fetchInvoices} event={props.eventState} />
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
        </div>
    )
}