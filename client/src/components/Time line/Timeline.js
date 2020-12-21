import React, { useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import CakeIcon from '@material-ui/icons/Cake';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
// import { Container } from '@material-ui/core';
import { useEventHook } from '../../hooks/Hooks';
import "./style.css"
import { grey } from '@material-ui/core/colors';




const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '6px 16px',
    // padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

function OutlinedTimeline() {
  const classes = useStyles();
  const eventHook = useEventHook();
  const events = [
    //   {
    //     _id: 1,
    //   eventName: "Event 1",
    //   eventDate: "12/20/2020"
    // },
    //   {
    //     _id:2, 
    //   eventName: "Event 2",
    //   eventDate: "12/15/2020"

    // },
    //   {
    //     _id: 3, 
    //   eventName: "Event 3",
    //   eventDate: "12/22/2020"

    // },
    //   {
    //     _id: 4,
    //   eventName: "Event 4",
    //   eventDate: "12/31/2020"

    // }
  ]



  return (

    <Timeline align="alternate" className="timelineContainer">
      <h2> Timeline</h2>
      {eventHook.events.filter(item => {
        let date = new Date(item.eventDate);
        return date >= new Date();
      }).slice(0, 10).map((event) => {
        return <TimelineItem key={event._id} >
          <TimelineOppositeContent>
            <Typography variant="body2" color="textSecondary">
              {event.eventDate}
            </Typography>
          </TimelineOppositeContent>
          {/* <TimelineSeparator>
            <TimelineDot>
              <CakeIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator> */}
          {/* <TimelineOppositeContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6" component="h1">
                {event.eventName}
              </Typography>
              </Paper>
          </TimelineOppositeContent> */}
            <TimelineSeparator>
              <TimelineDot>
                <CakeIcon style={{ color: grey[700] }} />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3} className={classes.paper}>
                <Typography variant="h6" component="h1">
                  {event.eventName}
                </Typography>
              </Paper>
            </TimelineContent>
        </TimelineItem>
      })}
    </Timeline>

  );
}

export default OutlinedTimeline;