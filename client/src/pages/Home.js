import React, { useEffect } from "react";
import "./Home.css"
import { useState } from 'react';
import Container from "../components/Container/index"
import OutlinedTimeline from "../components/Time line/Timeline"
import EventCountdown from "../components/Countdown/EventCountdown"
// import ReminderForm from "../components/ReminderForm/ReminderForm"
import UpcomingEvents from "../components/EventsList/UpcomingEvents"
// import NewReminders from "../components/NewReminders/NewReminders"
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import API from "../utils/API"
import { useEventHook } from "../hooks/Hooks";
import bowtie from "../assets/Partie-Logo-Blue.png"


const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 10,
    flexGrow: 1,
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        }
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    backgroundColor: '#c5e2e3'
  },
  bowtie: {
    width: 500,
  },
  paperBowtie: {
    padding: theme.spacing(2),
    textAlign: 'center',
    direction: 'column',
    justify: 'space-around',
    alignItems: "stretch",
    color: theme.palette.text.secondary,
    backgroundColor: '#9bcdce',
    boxShadow: 'none'
  },
}));


function Home(props) {
  const classes = useStyles();
  // Reminder components : 
  const eventHook = useEventHook();
  useEffect(() => {
    API.getAllEvents().then((data) => {

      eventHook.replaceAllEvents(data.data);
    })
  },[])


  const [reminders, setReminders] = useState([]);


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
                <EventCountdown setEvent = {props.setEvent}/>
              </Paper>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Paper className={classes.paper}>
                <OutlinedTimeline />
              </Paper>
            </Grid>


            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <Paper className={classes.paper}>
                <UpcomingEvents className={classes.paper} setEvent={props.setEvent} />
              </Paper>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <Paper className={classes.paperBowtie}>
                <img src={bowtie} className={classes.bowtie} />
              </Paper>
            </Grid>
              {/* <Paper className={classes.paper} id="Reminders">
                <Typography variant="h6" className={classes.title}>
                  My Reminders
                </Typography> */}
              {/* <NewReminders reminders={reminders} />
                <ReminderForm addReminder={addReminder} /> */}
              {/* </Paper> */}
            
          </Grid>
        </div>
      </Container>
    </>
  )
}

export default Home;