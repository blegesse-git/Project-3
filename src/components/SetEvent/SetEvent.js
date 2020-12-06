import React from "react";
import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
import LocalizationProvider from '@material-ui/lab/LocalizationProvider';
import DatePicker from '@material-ui/lab/DatePicker';
import TextField from '@material-ui/core/TextField';


function SetEvent() {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
        
        <DatePicker
        label="Basic example"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} variant="standard" />}
      />

    </LocalizationProvider>
  );
}


export default SetEvent;

