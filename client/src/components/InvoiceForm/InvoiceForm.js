import React from 'react';
import { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Container from "@material-ui/core/Container"
import FormControl from "@material-ui/core/FormControl"
import { Button } from '@material-ui/core';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';


const InvoiceForm = ({ addInvoice }) => {
    const [invoiceDate, setInvoiceDate] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [address1, setAddress1] = useState("");
    const [address2, setAddress2] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zip, setZip] = useState("");
    const [summary, setSummary] = useState("");
    const [amountDue, setAmountDue] = useState("");
    

    const handleSubmitInvoice = (e) => {
        e.preventDefault();
        // addInvoice()
        setFirstName("");
        setLastName("");
        setAddress1("");
        setAddress2("");
        setCity("");
        setState("");
        setZip("");
        setInvoiceDate("");
        setAmountDue("");
        alert("got that shit!")
    }

    return (
        <div>
            <Container>
                <form onSubmit={handleSubmitInvoice}>
                    <FormControl>
                        <TextField 
                            type="date"
                            label="Invoice Date"
                            required={true}
                            style={{ width: 250 }}
                            value={invoiceDate}
                            onChange={(e) => setInvoiceDate(e.target.value)}
                        />

                        <TextField
                            label="First Name"
                            required={true}
                            style={{ width: 250 }}
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)} 
                        />
                        
                        <TextField
                            label="Last Name"
                            required={true}
                            style={{ width: 250 }}
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)} 
                        />
                        
                        <TextField
                            label="Address 1"
                            required={true}
                            style={{ width: 250 }}
                            value={address1}
                            onChange={(e) => setAddress1(e.target.value)} 
                        />
                        
                        <TextField
                            label="Address 2"
                            required={true}
                            style={{ width: 250 }}
                            value={address2}
                            onChange={(e) => setAddress2(e.target.value)} 
                        />
                        
                        <TextField
                            label="City"
                            required={true}
                            style={{ width: 250 }}
                            value={city}
                            onChange={(e) => setCity(e.target.value)} 
                        />
                        
                        <TextField
                            label="State"
                            required={true}
                            style={{ width: 250 }}
                            value={state}
                            onChange={(e) => setState(e.target.value)} 
                        />
                        
                        <TextField
                            label="Zip"
                            required={true}
                            style={{ width: 250 }}
                            value={zip}
                            onChange={(e) => setZip(e.target.value)} 
                        />

                        <TextField
                            id="standard-multiline-flexible"
                            label="Invoice Summary"
                            multiline
                            rowsMax={10}
                            value={summary}
                            onChange={e => setSummary(e.target.value)}
                        />

                        <InputLabel 
                            htmlFor="standard-adornment-amount">Amount Due</InputLabel>
                            <Input
                                id="standard-adornment-amount"
                                value={amountDue}
                                onChange={e => setAmountDue(e.target.value)}
                                startAdornment={
                                    <InputAdornment 
                                    position="start">$</InputAdornment>}
                            />
                        
                        <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                            style={{ width: 250, margin: 10 }}>Create Invoice</Button>

                    </FormControl>
                </form>
            </Container>
        </div>
    )
}

export default InvoiceForm;