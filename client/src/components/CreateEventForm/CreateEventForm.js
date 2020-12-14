import React from 'react';
import { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Container from "@material-ui/core/Container";
import FormControl from "@material-ui/core/FormControl";
import { Button } from '@material-ui/core';


const CreateEventForm = ({addNewEvent}) => {
 

  
// our states will let user input their own info and pass it to the db
    const [eventName, setEventName] = useState('');
    const [firstName, setFirstName] =useState('');
    const [lastName, setLastName] = useState('');
    const [eventDate, setEventDate] = useState('');
    const [eventBudget, setEventBudget] = useState('');
    const[eventEmail, setEventEmail] =useState('');
    const [phoneNum, setPhoneNum] = useState('');
    const handleSubmitEventForm =(e) =>{
        e.preventDefault();
        addNewEvent( {
            eventName,
            firstName,
            lastName,
            eventDate,
            eventBudget,
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
        setEventBudget("")
        console.log("Event Budget is Set!")
        setEventEmail("")
        console.log("Event Email is Set!")
        setPhoneNum("")
        console.log("Phone number is Set!")
      
       
    }

   
        return (
            <div>
                <Container>
                    <h3> Event Information</h3>
                    <form  onSubmit={handleSubmitEventForm}>
                        <FormControl>
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
                             label="Budget"
                             required={true}
                             value ={eventBudget}
                             style={{width: 400}}
                             onChange={(e) => setEventBudget(e.target.value)}
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
                                style={{ width: 400 }}>
                            Create Event
                        </Button> 
                      
                        </FormControl>
                    </form>
                </Container>
            </div>
        );
    
}


export default CreateEventForm;