import React from 'react';
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
import CreateEvent from "../CreateEvent/CreateEvent"
import "./style.css"

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '6px 16px',
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

 function OutlinedTimeline() {
  const classes = useStyles();
  return (
    <Timeline align="alternate" className="timelineContainer">
      <h2> Timeline</h2>
  <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            date: 
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot>
            <CakeIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              event name
            </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}

export default OutlinedTimeline;