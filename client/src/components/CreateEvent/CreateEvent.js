import React from 'react';
import { Button } from '@material-ui/core';;
import { useState } from 'react';
import CreateEventForm from "../CreateEventForm/CreateEventForm"
// import CreateBtn from '../CreateEvent Button/CreateBtn';
import API from "../../utils/API";
import { useEventHook } from '../../hooks/Hooks';

function CreateEvent() {

    const eventHook = useEventHook();

// if statement to render alert:
// const [event, setNewEvent] = useState([
//     {
//         id: 1, 
//         titleName: "BootCamp Graduation",
//         titleFirst: "Jane",
//         titleLast: "Doe",
//         titleDate: "12/22/2020",
//         titleBudget: "8500",
//         eventEmail: "FantasticLadies@HBIC.com",
//         titlePhone: '(123)456-7891'
//     }
// ]);

const [eventName, setEventName] = useState('');
const [firstName, setFirstName] =useState('');
const [lastName, setLastName] = useState('');
const [eventDate, setEventDate] = useState('');
const [eventBudget, setEventBudget] = useState('');
const [eventEmail, setEventEmail] =useState('');
const [phoneNum, setPhoneNum] = useState('');

const handleSubmitEventForm =(e) => {
    e.preventDefault();
    // addNewEvent( {
    //     eventName,
    //     firstName,
    //     lastName,
    //     eventDate,
    //     eventBudget,
    //     eventEmail,
    //     phoneNum
    // } )
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

    const data = {
        eventName: eventName,
        firstName: firstName,
        lastName: lastName,
        eventDate: eventDate,
        eventBudget: eventBudget,
        eventEmail: eventEmail,
        phoneNum: phoneNum
    };

    //console.log(data);
  
    API.createEvent(data).then(results => {

       console.log("React/front end API hit");
       console.log(results);
       eventHook.addEvent(results.data);
    })

}

// const addNewEvent = (newEventData) =>{
//      const newEvent ={
//          id: 2,
//          titleName : newEventData.eventName,
//          titleFirstName: newEventData.firstName,
//          titleLastName: newEventData.lastName,
//          titleDate: newEventData.eventDate,
//          titleBudget: newEventData.eventBudget,
//          titleEmail: newEventData.eventEmail,
//          titlePhone: newEventData.phoneNum
//      }
//      setNewEvent([...event, newEvent])
//      console.log(newEvent)
     
// }
   
        return (
            <CreateEventForm 
            submit={handleSubmitEventForm}
            date={eventDate}
            setDate={setEventDate}
            event={eventName}
            setEvent={setEventName}
            firstName={firstName}
            setFirstName={setFirstName}
            lastName={lastName}
            setLastName={setLastName}
            budget={eventBudget}
            setBudget={setEventBudget}
            email={eventEmail}
            setEmail={setEventEmail}
            phone={phoneNum}
            setPhone={setPhoneNum}
            />
                  
                
           
        );
    }


export default CreateEvent;