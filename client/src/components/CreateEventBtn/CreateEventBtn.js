import React from 'react';
import { Button } from '@material-ui/core';



function CreateEventBtn(){


    return(
        < Button 
        variant="contained" 
   color="primary" 
   type="submit" 
   style={{ width: 400 }}>
        Create Event
        </Button> 
    )
   
}


export default CreateEventBtn;