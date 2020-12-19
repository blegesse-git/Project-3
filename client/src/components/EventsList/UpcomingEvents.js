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
import Button from "@material-ui/core/Button"
// import Link from '@material-ui/core/Link';
import {Link} from "react-router-dom";

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

  function onClickEvent(event2){
    console.log(event2)
    props.setEvent(event2)
  }



  return (
    <Container className={classes.container}>
      <h2>My Upcoming Events</h2>
      <List className={classes.container}>
      {eventHook.events.slice(0, 5).map((event2) => {
          return <ListItem    key={event2._id}>
            <Link to="/events" className="link">
            <Button className={classes.button}
              type="link"
              variant="contained"
              color="secondary"
              style={{ backgroundColor: "LightCoral" }}
              onClick={() => onClickEvent(event2)}
              
            >
              <ListItemAvatar>
              <Avatar>
                <EventIcon style={{ fontSize: 40, color: 'white', backgroundColor: "LightCoral" }} />
              </Avatar>
              </ListItemAvatar>
              <ListItemText primary={event2.eventName} secondary={`${event2.firstName} ${event2.lastName}`} />
            </Button>
        </Link>
          </ListItem>
        })}
      </List>
    </Container>
  );
}

export default EventsList;