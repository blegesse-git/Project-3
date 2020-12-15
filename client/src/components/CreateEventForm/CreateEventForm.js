import React from 'react';
import { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Container from "@material-ui/core/Container";
import FormControl from "@material-ui/core/FormControl";
import { Button } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';

const CreateEventForm = ({addNewEvent}) => {
 

  
// our states will let user input their own info and pass it to the db
    const [eventName, setEventName] = useState('');
    const [firstName, setFirstName] =useState('');
    const [lastName, setLastName] = useState('');
    const [eventDate, setEventDate] = useState('');
    const [billingAddress, setBillingAddress] = useState('');
    const [address2, setAddress2] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zip, setZip] = useState("");
    const[eventEmail, setEventEmail] =useState('');
    const [phoneNum, setPhoneNum] = useState('');
    const handleSubmitEventForm =(e) =>{
        e.preventDefault();
        addNewEvent( {
            eventName,
            firstName,
            lastName,
            eventDate,
            billingAddress,
            address2,
            state,
            zip,
            eventEmail,
            phoneNum
        })
        setEventName("");
        console.log("Event Name set!")
        setFirstName("");
        console.log("First Name is set!")
        setLastName("");
        console.log("Last Name is set!")
        setEventDate("")
        console.log("Event Date is set!")
        setBillingAddress("")
        setAddress2("");
        setCity("");
        setState("");
        setZip("");
        console.log("Billing Address is Set!")
        setEventEmail("")
        console.log("Event Email is Set!")
        setPhoneNum("")
        console.log("Phone number is Set!")
      
       
    }

   
        return (
            <div>
                <Container>
                    <h4 >Fill out client information</h4>
                    <form  onSubmit={handleSubmitEventForm}>
                        <FormControl >
                        <TextField
                            
                            type="date"
                            required={true}
                            value={eventDate}
                            style={{width: 400}}
                            onChange ={(e) => setEventDate(e.target.value)}

                            />
                            <TextField 
                            label=" Event Name"
                            required={true}
                            value={eventName}
                            style={{width: 400}}
                            onChange = {(e) => setEventName(e.target.value)}
                            />

                        <TextField 
                            label=" First Name"
                            required={true}
                            value={firstName}
                            style={{width: 400}}
                            onChange = {(e) => setFirstName(e.target.value)}
                            />     

                        <TextField 
                            label=" Last Name"
                            required={true}
                            value={lastName}
                            style={{width: 400}}
                            onChange = {(e) => setLastName(e.target.value)}
                            />   
                        
                            <TextField
                             label="Address 1"
                             required={true}
                             value ={billingAddress}
                             style={{width: 400}}
                             onChange={(e) => setBillingAddress(e.target.value)}
                             />
                                  
                        <TextField
                            label="Address 2"
                            required={false}
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
                             label= "Email"
                             required={true}
                             value={eventEmail}
                             style={{width: 400}}
                             onChange={(e) => setEventEmail(e.target.value)}
                            />     

                             <TextField
                             label= "(111)222-3333"
                             required={true}
                             value={phoneNum}
                             style={{width: 400}}
                             onChange={(e) => setPhoneNum(e.target.value)}
                            />      

                         < Button 
                             variant="contained" 
                                color="primary" 
                                type="submit" 
                                style={{ width: 400 , height: 25}}>
                                    <SaveIcon/> create this event
                        </Button> 
                      
                        </FormControl>
                    </form>
                </Container>
            </div>
        );
    
}


export default CreateEventForm;