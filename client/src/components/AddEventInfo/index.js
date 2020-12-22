import React, { useState, useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import SaveIcon from '@material-ui/icons/Save';
import Button from '@material-ui/core/Button';
import { VenueContext } from '../../context/VenueContext';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import EventsService from '../../services/events';

function EventInfo(props) {
    const useStyles = makeStyles((theme) => ({
        root: {
            '& > *': {
                margin: theme.spacing(1),
                width: '45ch',
            },

        },
        button: {
            backgroundColor: '#e94837',
            '&:hover': {
                backgroundColor: "lightgrey",

            }
        }
    }));


    const venueInfo = useContext(VenueContext)
    const [name, setName] = venueInfo.venueName
    const [phone, setPhone] = venueInfo.venuePhone
    const [website, setWebsite] = venueInfo.venueWebsite
    const [address, setAddress] = venueInfo.venueAddress
    const [time, setTime] = venueInfo.venueTime
    // const [info, setInfo] = venueInfo.venueInfo

    const handleOnChange = (event) => {
        setName(event.target.value)




    }
    const handlePhoneChange = (e) => {
        setPhone(e.target.value)
    }
    const handleWebChange = (e) => {
        setWebsite(e.target.value)
    }
    const handleAdChange = (e) => {
        setAddress(e.target.value)
    }
    const handleTimeChange = (e) => {
        setTime(e.target.value)
    }

    const handleonSubmit = async (e) => {
        e.preventDefault()
        const venue = {name, phone, website, address, time}
        props.setInfo(venue)

        setName("")
        setPhone("")
        setWebsite("")
        setAddress("")
        setTime("")
        const response =  await EventsService.addVenue(props.eventState._id, venue);
        
        console.log(response)

    }
    // const listOfItems = async () => {
    //     setNewItem((previousValue)=> {
    //         return [...previousValue, item];
    //     });
    //     const response =  await EventsService.addToDo(props.eventState._id, venue);
    //     setItems(response.data[0].toDoItems);
    //     setItem("");
        
        
        
        
    // };
    

    const classes = useStyles();
    return (
        <div>
            <form className={classes.root} noValidate autoComplete="off" >
                <h2>Event Information</h2>

                <TextField id="standard-basic" label="Venue Name" value={name} onChange={handleOnChange} />
                <TextField id="standard-basic" label="Venue Phone" value={phone} onChange={handlePhoneChange} />
                <TextField id="standard-basic" label="Venue Website" value={website} onChange={handleWebChange} />
                <TextField id="standard-basic" label="Venue Address" value={address} onChange={handleAdChange} />
                <TextField id="standard-basic" label="Event Time" value={time} onChange={handleTimeChange} />
                <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    className={classes.button}
                    startIcon={<SaveIcon />}
                    type="button"
                    onClick={handleonSubmit}
                >
                    Save
                </Button>
            </form>
            
        </div>
    )
}
export default EventInfo