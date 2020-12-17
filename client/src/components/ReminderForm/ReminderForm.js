import React from 'react';
import { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Container from "@material-ui/core/Container"
import FormControl from "@material-ui/core/FormControl"
import { Button } from '@material-ui/core';

const ReminderForm = ({ addReminder }) => {
  const [text, setText] = useState("")
  const handleSubmitReminder = (e) => {
    e.preventDefault();
    addReminder(text);
    setText("")
    console.log("New Reminder Alert!")
    console.log(text)
  }

  return (
    <div>
      <Container >
        <form onSubmit={handleSubmitReminder}>
      
          <FormControl >

            <TextField 
              label="Add reminder" 
              required={true} 
              style={{ width: 250 }} 
              value={text} 
              onChange={(e) => setText(e.target.value)} />
            
            <Button 
              variant="contained" 
              color="primary" 
              type="submit" 
              style={{ width: 250 }}>Add</Button>


          </FormControl>
        </form>


      </Container>

    </div>
  );
}
export default ReminderForm;