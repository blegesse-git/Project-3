import React from 'react';
import { Button } from '@material-ui/core';;
import { useState } from 'react';
import CreateEventForm from "../CreateEventForm/CreateEventForm"
// import CreateBtn from '../CreateEvent Button/CreateBtn';


function CreateEvent() {

const [event, setNewEvent] = useState([
    {
        id: 1, 
        titleName: "BootCamp Graduation",
        titleDate: "12/22/2020",
        titleBudget: "8500",
        eventEmail: "FantasticLadies@HBIC.com"

    }
]);

const addNewEvent = (newEventData) =>{
     const newEvent ={
         id: 2,
         titleName : newEventData.eventName,
         titleDate: newEventData.eventDate,
         titleBudget: newEventData.eventBudget,
         titleEmail: newEventData.eventEmail
     }
     setNewEvent([...event, newEvent])
     console.log(newEvent)
     
}
   
        return (
                  <CreateEventForm addNewEvent={addNewEvent}/>
                  
                
           
        );
    }


export default CreateEvent;