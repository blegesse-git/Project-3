import React, { useEffect } from "react";
import "./Home.css"
import { useState } from 'react';
import Container from "../components/Container/index"
import OutlinedTimeline from "../components/Time line/Timeline"
import EventCountdown from "../components/Countdown/EventCountdown"
import ReminderForm from "../components/ReminderForm/ReminderForm"
import UpcomingEvents from "../components/EventsList/UpcomingEvents"
import NewReminders from "../components/NewReminders/NewReminders"
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import AddNewEvent from "../components/AddNewEventBtn/AddNewEvent"
import CreateEvent from "../components/CreateEvent/CreateEvent"
import Typography from '@material-ui/core/Typography';
import TimeLineViewer from "../components/Timeline Viewer/TimelineViewer"

import API from "../utils/API"
import { useEventHook } from "../hooks/Hooks";



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));


function Home() {
  const classes = useStyles();
 // Reminder components : 
  const eventHook = useEventHook();
  useEffect(() => {API.getAllEvents().then((data) => {
    // console.log(data);
    // console.log(data.data);
    eventHook.replaceAllEvents(data.data);
  }) 
}) 

 const [reminders, setReminders] = useState([
    // {
    //   id: 1,
    //   title: "Call vendors"
    // }

  ]);


  const addReminder = (text) => {

    const newReminder = {
      _id: 2,
      title: text
    }
    console.log(newReminder._id)
    setReminders([...reminders, newReminder])

    
  };

  return (
    <>
      <Container>
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <EventCountdown />
              </Paper>
            </Grid>

          
            <Grid item xs={12} sm={6}>
              <Paper className={classes.paper}>
              <OutlinedTimeline />
              </Paper>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Paper className={classes.paper} id="upcomingEvents">
                <UpcomingEvents />
              </Paper>
              <Paper className={classes.paper} id="Reminders">
                <Typography variant="h6" className={classes.title}>
                  My Reminders
                </Typography>
                <NewReminders reminders={reminders} />
                <ReminderForm addReminder={addReminder} />
              </Paper>
            </Grid>
          </Grid>
        </div>
      </Container>
    </>
  )
}

export default Home;