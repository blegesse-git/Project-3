import React from 'react';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Grid from '@material-ui/core/Grid';
import Tooltip from '@material-ui/core/Tooltip';
import Container from "@material-ui/core/Container"
import FormControl from "@material-ui/core/FormControl"
import { Button } from '@material-ui/core';







const SetReminder =({saveReminder}) => {
  // const classes = useStyles();
  // const classesIcon=useStylesIcon();
  // const [value, setValue] = useState('');
  // console.log(value)
  // console.log(setValue)

  return (
    <div>
      <Container >
   <form>
    {/* className={classes.container} */}
<FormControl >

  <TextField label= "Add reminder" required={true} style={{width:250}}/>
  <Button  variant="contained" color="primary" type="submit" style={{width: 250}}>Add</Button>

  
      </FormControl>
    </form>
    

</Container>
   
     </div>
  );
}
 export default SetReminder;