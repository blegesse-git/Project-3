import React from 'react';
import { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Container from "@material-ui/core/Container"
import FormControl from "@material-ui/core/FormControl"
import { Button } from '@material-ui/core';

const CreateEventForm = ({addNewEvent}) => {
    const [eventName, setEventName] = useState('');
    const [eventDate, setEventDate] = useState('');
    const [eventBudget, setEventBudget] = useState('');
    const[eventEmail, setEventEmail] =useState('');
    const handleSubmitEventForm =(e) =>{
        e.preventDefault();
        addNewEvent( {
            eventName,
            eventDate,
            eventBudget,
            eventEmail
        })
        setEventName("");
        console.log("Event Name set!")
        setEventDate("")
        console.log("Event Date set!")
        setEventBudget("")
        console.log("EventBudgetSet!")
        setEventEmail("")
        console.log("Event Email Set!")
        alert( "Event Created")
       
    }

   
        return (
            <div>
                <Container>
                    <form  onSubmit={handleSubmitEventForm}>
                        <FormControl>
                            <TextField 
                            label=" Event Name"
                            required={true}
                            value={eventName}
                            style={{width: 400}}
                            onChange = {(e) => setEventName(e.target.value)}
                            />
                            <TextField
                             label=" Event Date"
                             required={true}
                             value={eventDate}
                             style={{width: 400}}
                             onChange ={(e) => setEventDate(e.target.value)}

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