import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import EventIcon from '@material-ui/icons/Event';
import { Container } from '@material-ui/core';
import { useEventHook } from '../../hooks/Hooks';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

 function EventsList() {
  const classes = useStyles();
  const eventHook = useEventHook();
  const events = [
  //   {
  //   eventName: "Event 1",
  //   firstName: "Lisa",
  //   lastName: "Worsham"
  // },
  //   {
  //   eventName: "Event 2",
  //   firstName: "Lisa",
  //   lastName: "Worsham"
  // },
  //   {
  //   eventName: "Event 3",
  //   firstName: "Lisa",
  //   lastName: "Worsham"
  // },
  //   {
  //   eventName: "Event 4",
  //   firstName: "Lisa",
  //   lastName: "Worsham"
  // }
]

console.log(eventHook);

  // console.log(API.lookEvent)

  return (
      <Container>
          <h2>My Upcoming Events</h2>
      <List className={classes.root}>
        {eventHook.events.map((event) => {
          return <ListItem key={event._id}>
            <ListItemAvatar>
              <Avatar>
                <EventIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={event.eventName}  />
            {/* secondary={`${event.firstName} ${event.lastName}`} */}
          </ListItem>
        })}
    </List>
    </Container>
  );
}

export default EventsList;