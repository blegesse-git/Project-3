import React from 'react';
import { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Container from "@material-ui/core/Container";
import FormControl from "@material-ui/core/FormControl";
import { Button } from '@material-ui/core';
import API from "../../utils/API";
import "./style.css"


const CreateEventForm = (props) => {



    // our states will let user input their own info and pass it to the db
    // const [eventName, setEventName] = useState('');
    // const [firstName, setFirstName] =useState('');
    // const [lastName, setLastName] = useState('');
    // const [eventDate, setEventDate] = useState('');
    // const [eventBudget, setEventBudget] = useState('');
    // const[eventEmail, setEventEmail] =useState('');
    // const [phoneNum, setPhoneNum] = useState('');

    // const handleSubmitEventForm =(e) => {
    //     e.preventDefault();
    //     addNewEvent( {
    //         eventName,
    //         firstName,
    //         lastName,
    //         eventDate,
    //         eventBudget,
    //         eventEmail,
    //         phoneNum
    //     })
    //     setEventName("");
    //     console.log("Event Name set!")
    //     setFirstName("");
    //     console.log("First Name is set!")
    //     setLastName("");
    //     console.log("Last Name is set!")
    //     setEventDate("")
    //     console.log("Event Date is set!")
    //     setEventBudget("")
    //     console.log("Event Budget is Set!")
    //     setEventEmail("")
    //     console.log("Event Email is Set!")
    //     setPhoneNum("")
    //     console.log("Phone number is Set!")

    //    API.createEvent(
    //       addNewEvent
    //    ).then(results => {
    //        console.log("React/front end API hit");
    //    })
    // }


    return (
        <div>
            <Container>
                <h3> Event Information</h3>
                <form onSubmit={props.submit}>
                    <FormControl>
                        <TextField

                            type="date"
                            required={true}
                            value={props.date}
                            style={{ width: 400 }}
                            onChange={(e) => props.setDate(e.target.value)}

                        />
                        <TextField
                            label=" Event Name"
                            required={true}
                            value={props.event}
                            style={{ width: 400 }}
                            onChange={(e) => props.setEvent(e.target.value)}
                        />

                        <TextField
                            label=" First Name"
                            required={true}
                            value={props.firstName}
                            style={{ width: 400 }}
                            onChange={(e) => props.setFirstName(e.target.value)}
                        />

                        <TextField
                            label=" Last Name"
                            required={true}
                            value={props.lastName}
                            style={{ width: 400 }}
                            onChange={(e) => props.setLastName(e.target.value)}
                        />

                        <TextField
                            label="Budget"
                            required={true}
                            value={props.budget}
                            style={{ width: 400 }}
                            onChange={(e) => props.setBudget(e.target.value)}
                        />

                        <TextField
                            label="Email"
                            required={true}
                            value={props.Email}
                            style={{ width: 400 }}
                            onChange={(e) => props.setEmail(e.target.value)}
                        />

                        <TextField
                            label="(111)222-3333"
                            required={true}
                            value={props.phone}
                            style={{ width: 400 }}
                            onChange={(e) => props.setPhone(e.target.value)}
                        />

                        <Button
                            variant="contained"
                            type="submit"
                            className="button"
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