import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import ButtonAppBar from '../components/Navbar'
import InputWithIcon from '../components/TextField'
import OutlinedButtons from '../components/Submit Button'
import UploadButton from '../components/Upload Button'
import Container from '../components/Container'
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';



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
    },
    date: {
        textAlign: 'left'
    }
}));

export default function Invoice() {
    const classes = useStyles();
    const [selectedDate, setSelectedDate] = React.useState(new Date('2020-12-22T00:00:00'));

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const [values, setValues] = React.useState({
        amount: '',
        services: ''
    });

    const handleAmountChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const [firstName, setFirstName] = React.useState("");
    const [lastName, setLastName] = React.useState("");
    const [address1, setAddress1] = React.useState("");
    const [address2, setAddress2] = React.useState("");
    const [city, setCity] = React.useState("");
    const [state, setState] = React.useState("");
    const [zip, setZip] = React.useState("");
    const [invoiceSummary, setInvoiceSummary] = React.useState("");

    const handleSubmit = (event) => {
        alert(`
        First Name: ${firstName}
        Last Name: ${lastName}
        Last Name: ${address1}
        Last Name: ${address2}
        Last Name: ${city}
        Last Name: ${state}
        Last Name: ${zip}
        Last Name: ${invoiceSummary}`);
        setFirstName(event);
        setLastName(event);
    }


    return (
        <Container>
            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}><h1>Invoices</h1></Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}><h2>Create Invoice</h2>
                            <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                    <Grid item xs>
                                        <KeyboardDatePicker
                                            className={classes.date}
                                            disableToolbar
                                            variant="inline"
                                            format="MM/dd/yyyy"
                                            margin="normal"
                                            id="date-picker-inline"
                                            label="Invoice Date"
                                            value={selectedDate}
                                            onChange={handleDateChange}
                                            KeyboardButtonProps={{
                                                'aria-label': 'change date',
                                            }}
                                        />
                                    </Grid>
                                </MuiPickersUtilsProvider>
                                <TextField 
                                    required 
                                    id="standard-required" 
                                    label="First Name" 
                                    defaultValue="" 
                                    value={firstName} 
                                    onChange={e => setFirstName(e.target.value)} />
                                <TextField 
                                    required 
                                    id="standard-required" 
                                    label="Last Name" 
                                    defaultValue="" 
                                    value={lastName} 
                                    onChange={e => setLastName(e.target.value)} />
                                <TextField 
                                    required 
                                    id="standard-required" 
                                    label="Address Line 1" 
                                    defaultValue="" 
                                    value={address1} 
                                    onChange={e => setAddress1(e.target.value)} />
                                <TextField 
                                    required 
                                    id="standard" 
                                    label="Address Line 2"
                                    defaultValue="" 
                                    value={address2} 
                                    onChange={e => setAddress2(e.target.value)} />
                                <TextField 
                                    required 
                                    id="standard-required" 
                                    label="City" 
                                    defaultValue="" 
                                    value={city} 
                                    onChange={e => setCity(e.target.value)} />
                                <TextField 
                                    required 
                                    id="standard-required" 
                                    label="State" 
                                    defaultValue="" 
                                    value={state} 
                                    onChange={e => setState(e.target.value)} />
                                <TextField 
                                    required 
                                    id="standard-required" 
                                    label="Zip" 
                                    defaultValue="" 
                                    value={zip} 
                                    onChange={e => setZip(e.target.value)} />
                                <TextField
                                    id="standard-multiline-flexible"
                                    label="Invoice Summary"
                                    multiline
                                    rowsMax={10}
                                    value={invoiceSummary}
                                    onChange={e => setInvoiceSummary(e.target.value)}
                                />
                            </form>
                            <FormControl halfWidth className={classes.margin} onSubmit={handleSubmit}>
                                <InputLabel htmlFor="standard-adornment-amount">Amount Due</InputLabel>
                                <Input
                                    id="standard-adornment-amount"
                                    value={values.amount}
                                    onChange={handleAmountChange('amount')}
                                    startAdornment={
                                        <InputAdornment position="start">$</InputAdornment>}
                                />
                            </FormControl>
                            <OutlinedButtons>GENERATE INVOICE</OutlinedButtons>
                        </Paper>

                    </Grid>
                </Grid>
            </div>
        </Container>
    )
}