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

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };


    return (
        <Container>
            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}><h1>Invoice</h1></Paper>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Paper className={classes.paper}><h2>Create Invoice</h2>
                            <form className={classes.root} noValidate autoComplete="off">
                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                    <Grid container justify="space-around">
                                        <KeyboardDatePicker
                                            disableToolbar
                                            variant="inline"
                                            format="MM/dd/yyyy"
                                            margin="normal"
                                            id="date-picker-inline"
                                            label="Date picker inline"
                                            value={selectedDate}
                                            onChange={handleDateChange}
                                            KeyboardButtonProps={{
                                                'aria-label': 'change date',
                                            }}
                                        />
                                    </Grid>
                                </MuiPickersUtilsProvider>
                                <TextField required id="standard-required" label="Required" defaultValue="First Name" />
                                <TextField required id="standard-required" label="Required" defaultValue="Last Name" />
                                <TextField required id="standard-required" label="Required" defaultValue="Address Line 1" />
                                <TextField required id="standard-required" label="Required" defaultValue="Address Line 2" />
                                <TextField required id="standard-required" label="Required" defaultValue="City" />
                                <TextField required id="standard-required" label="Required" defaultValue="State" />
                                <TextField required id="standard-required" label="Required" defaultValue="Zip" />
                                <TextField
                                    id="standard-multiline-flexible"
                                    label="List of Services Provided"
                                    multiline
                                    rowsMax={10}
                                    value={values.services}
                                    onChange={handleChange}
                                />
                            </form>
                            <FormControl halfWidth className={classes.margin}>
                                <InputLabel htmlFor="standard-adornment-amount">Amount</InputLabel>
                                <Input
                                    id="standard-adornment-amount"
                                    value={values.amount}
                                    onChange={handleChange('amount')}
                                    startAdornment={<InputAdornment position="start">$</InputAdornment>}
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