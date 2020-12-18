import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import EventIcon from '@material-ui/icons/Event';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import { Container } from '@material-ui/core';
import { useEventHook } from '../../hooks/Hooks';
import Button from "@material-ui/core/Button"

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  button: {
    backgroundColor: "contained",
    width: 400,
    height: 50,
    marginLeft: 50,

  },
  container: {
    borderColor: "black",
    width: 600
  }
}));

function EventsList(props) {
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


  function onSubmitEvent(event) {
    console.log(event)
    props.setEvent(event)
  }


  return (
    <Container className={classes.container}>
      <h2>My Upcoming Events</h2>
      <List className={classes.container}>
        {eventHook.events.map((event) => {
          return <ListItem key={event._id}>
            {/* <ListItemAvatar>
              <Avatar>
                <EventIcon />
              </Avatar>
            </ListItemAvatar> */}
            <Button className={classes.button}
              type="button"
              variant="contained"
              color="secondary"
              style={{ backgroundColor: "LightCoral" }}

            >
              <Avatar>
                <EventIcon style={{ fontSize: 40, color: 'white', backgroundColor: "LightCoral" }} />
              </Avatar>
              <ListItemText primary={event.eventName} secondary={`${event.firstName} ${event.lastName}`} />
            </Button>
          </ListItem>
        })}
      </List>
    </Container>
  );
}

export default EventsList;