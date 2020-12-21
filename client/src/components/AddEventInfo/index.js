import React, { useState, useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import SaveIcon from '@material-ui/icons/Save';
import Button from '@material-ui/core/Button';
import { VenueContext } from '../../context/VenueContext';


function EventInfo () {
    const useStyles = makeStyles((theme) => ({
    root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '45ch',
    },
    
  },
  button: {
    backgroundColor: '#e94837',
    '&:hover':{
        backgroundColor: "lightgrey",
        
    }
    }
    }));
    

    const venueInfo = useContext(VenueContext)
    const [name, setName] = venueInfo.venueName
    const [phone, setPhone] = venueInfo.venuePhone
    const [website, setWebsite] = venueInfo.venueWebsite
    const [address, setAddress] = venueInfo.venueAddress
    const [note, setNote] = venueInfo.venueNote

    const handleOnChange = (event) => {
        setName(event.target.value)
        setPhone(event.target.value)
        setAddress(event.target.value)
        setWebsite(event.target.value)
        setNote(event.target.value)
    
        

    }

    const handleonSubmit = (e) => {
        e.preventDefault()
        
        
    }

    const classes = useStyles();
    return (
        <div>
            <form className={classes.root} noValidate autoComplete="off" onSubmit={handleonSubmit}>
                <h2>Event Information</h2>
                
                <TextField id="standard-basic" label="Venue Name" value={name} onChange={handleOnChange}/>
                <TextField id="standard-basic" label="Venue Phone" value={phone} onChange={handleOnChange}/>
                <TextField id="standard-basic" label="Venue Website" value={website} onChange={handleOnChange}/>
                <TextField id="standard-basic" label="Venue Address" value={address} onChange={handleOnChange}/>
                <TextField id="standard-basic" label="Notes" value={note} onChange={handleOnChange} />
                <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    className={classes.button}
                    startIcon={<SaveIcon />}
                    value="submit"
                >
                    Save
                </Button>
            </form>
        </div>
    )
}
export default EventInfo