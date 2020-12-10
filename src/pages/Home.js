import React from "react";
import "./Home.css"
import Container from "../components/Container/index"
import OutlinedTimeline from "../components/Time line/Timeline"
import EventCountdown from "../components/Countdown/EventCountdown"
import Reminders from "../components/Reminders/Reminders"
import UpcomingEvents from "../components/EventsList/UpcomingEvents"
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CreateBtn from "../components/CreateEvent Button/CreateBtn"

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

    return (
        <>
      <Container>  
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
                <EventCountdown/>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <OutlinedTimeline/>
              </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
        {/* <Paper className={classes.paper}>
        <SetReminder/>
              </Paper> */}
          <Paper className={classes.paper} id="upcomingEvents">
           <UpcomingEvents/>
              </Paper>
              <Paper className={classes.paper} id="Reminders">
                    <Reminders />
              </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
        <CreateBtn/>
        </Grid>
     </Grid>
   </div>
</Container>
 </>
)}

export default Home;