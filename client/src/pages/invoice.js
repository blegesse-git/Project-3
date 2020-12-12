import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import InvoiceForm from "../components/InvoiceForm/InvoiceForm"
import Container from '../components/Container'

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

    return (
        <Container>
            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={12} >
                        <Paper className={classes.paper}><h1>Invoices</h1></Paper>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Paper className={classes.paper}><h2>Create Invoice</h2>
                            <InvoiceForm />
                        </Paper>

                    </Grid>
                </Grid>
            </div>
        </Container>
    )
}