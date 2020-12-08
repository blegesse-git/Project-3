import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Grid from '@material-ui/core/Grid';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 250,
  },
}));
const useStylesIcon = makeStyles((theme) => ({
  fab: {
    margin: theme.spacing(2),
  },
  absolute: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(3),
  },
}));

 function SetReminder() {
  const classes = useStyles();
  const classesIcon=useStylesIcon();

  return (
    <form className={classes.container} noValidate>
  <div> 
  <Grid container spacing={3}>
          <Grid item xs={10}>   
  <TextField
          id="standard-full-width"
          style={{ margin: 8 }}
          placeholder="Add Reminder"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
        </Grid>
  <Grid item xs={2}>   
      <Tooltip title="Add" aria-label="add">
        <Fab color="primary" className={classesIcon.fab}>
          <AddIcon />
        </Fab>
      </Tooltip>

      </Grid>
      </Grid>
 </div>
  
   
    </form>
  );
}
 export default SetReminder;