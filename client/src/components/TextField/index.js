import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';




const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

export default function InputWithIcon(props) {
  const classes = useStyles();

  return (
    <div>
      <FormControl className={classes.margin}>
        <InputLabel htmlFor="input-with-icon-adornment" >{props.children}</InputLabel>
        <Input
          id="input-with-icon-adornment"
          
          startAdornment={
            <InputAdornment position="start">
              
            </InputAdornment>
          }
        />
      </FormControl>
      <TextField
        
        className={classes.margin}
        id="input-with-icon-textfield"
        label="Amount (negative-expense, positive - Income)"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AttachMoneyIcon />
              
            </InputAdornment>
            
          ),
        }}
      />
      
      
    </div>
  );
}
