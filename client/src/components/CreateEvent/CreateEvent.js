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
        titleFirst: "Green",
        titleLast: "Day",
        titleDate: "12/22/2020",
        titleBilling: "123 Blvd of Broken Dreams",
        address2: "Apt 333",
        city: "Houston",
        state: "TX",
        zip: "77095",
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
         titleBilling: newEventData.eventBilling,
         address2: newEventData.address2,
         city: newEventData.city,
         state: newEventData.state,
         zip: newEventData.zip,
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