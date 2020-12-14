import React from 'react';
import { Button } from '@material-ui/core';;
import { useState } from 'react';
import CreateEventForm from "../CreateEventForm/CreateEventForm"
// import CreateBtn from '../CreateEvent Button/CreateBtn';


function CreateEvent() {

// if statement to render alert:




const [event, setNewEvent] = useState([
    {
        id: 1, 
        titleName: "BootCamp Graduation",
        titleFirst: "Jane",
        titleLast: "Doe",
        titleDate: "12/22/2020",
        titleBudget: "8500",
        eventEmail: "FantasticLadies@HBIC.com",
        titlePhone: '(123)456-7891'

    }
]);

const addNewEvent = (newEventData) =>{
     const newEvent ={
         id: 2,
         titleName : newEventData.eventName,
         titleFirstName: newEventData.firstName,
         titleLastName: newEventData.lastName,
         titleDate: newEventData.eventDate,
         titleBudget: newEventData.eventBudget,
         titleEmail: newEventData.eventEmail,
         titlePhone: newEventData.phoneNum
     }
     setNewEvent([...event, newEvent])
     console.log(newEvent)
     
}
   
        return (
                  <CreateEventForm addNewEvent={addNewEvent}/>
                  
                
           
        );
    }


export default CreateEvent;