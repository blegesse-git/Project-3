import React from 'react';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import { Container } from '@material-ui/core';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import SetReminder from "../SetReminder/SetReminder"


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 2,
    Width: 650,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
}));



const Reminders =() =>{
  const classes = useStyles();
  const [reminders, setReminders, deleteReminder] = useState('');


  return (
      <Container>
    <div className={classes.root}>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" className={classes.title}>
         My Reminders
          </Typography>
          <div className={classes.demo}>
            <List> 
           {/* {reminders.map((reminder, index) => ( */}
                <ListItem > 
                  {/* key={index.toString()} */}
                  <ListItemAvatar>
                    <Avatar>
                      <NotificationsActiveIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="HELP ME!"                />
                  <ListItemSecondaryAction>
                    {/* <IconButton edge="end" aria-label="delete"
                    onClick={() => {}}>
                      <DeleteIcon />
                    </IconButton> */}
                  </ListItemSecondaryAction>
                </ListItem>,

              <SetReminder saveReminder={console.warn}/>
{/* ))}  */}
            </List>
          </div>
        </Grid>
    </div>
    </Container>
  );
}


export default Reminders;