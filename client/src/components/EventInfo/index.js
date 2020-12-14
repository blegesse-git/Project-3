import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import SaveIcon from '@material-ui/icons/Save';
import Button from '@material-ui/core/Button';



function EventInfo () {
    const useStyles = makeStyles((theme) => ({
    root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '45ch',
    },
    
  },
}));
    const classes = useStyles();
    return (
        <div>
            <form className={classes.root} noValidate autoComplete="off">
                <h2>Event Information</h2>
                <TextField id="standard-basic" label="Venue Name" />
                <TextField id="standard-basic" label="Venue Phone" />
                <TextField id="standard-basic" label="Venue Address" />
                <TextField id="standard-basic" label="Notes" />
                <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    className={classes.button}
                    startIcon={<SaveIcon />}
                >
                    Save
                </Button>
            </form>
        </div>
    )
}
export default EventInfo