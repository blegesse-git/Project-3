import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import SaveIcon from '@material-ui/icons/Save';
import Button from '@material-ui/core/Button';



function EventInfo (props) {
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
    const [name, setName] =  useState("")
    const [phone, setPhone] =  useState("")
    const [Address, setAddress] =  useState("")
    const [note, setNote] =  useState("")
    const [newVenue, setNewVenue] = useState([]);

    const handleOnChange = (event) => {
        setName(event.target.value)
        setPhone(event.target.value)
        setAddress(event.target.value)
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
                
                <TextField id="standard-basic" label="Venue Name" onChange={handleOnChange}/>
                <TextField id="standard-basic" label="Venue Phone" onChange={handleOnChange}/>
                <TextField id="standard-basic" label="Venue Address" onChange={handleOnChange}/>
                <TextField id="standard-basic" label="Notes" onChange={handleOnChange} />
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