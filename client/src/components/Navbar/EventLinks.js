import React, { useState } from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';

import { useEventHook } from '../../hooks/Hooks';
import { Container } from '@material-ui/core';
import EventTabs from "./EventTabs";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import StarBorder from '@material-ui/icons/StarBorder';


function EventLinks(props) {
  const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
    nested: {
      paddingLeft: theme.spacing(1),
    },
  }));



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


  function checkLinks(event2) {
    console.log(event2)
    props.setEvent(event2)
  }
  const classes = useStyles();


  return (
    <Container>




      {eventHook.events.map((event2) => {
        return <Collapse in={open} timeout="auto" unmountOnExit key={event2._id} onClick={() => checkLinks(event2)}>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText>{event2.eventName}</ListItemText>
            </ListItem>
          </List>
        </Collapse>


        // <ListItemText
        //   key={event2._id}
        //   component="button"
        //   variant="body1"
        //   style={{ color: 'black', fontSize: 18, textDecoration: "underline" }}
        //   onClick={() => checkLinks(event2)}
        // >
        //   {event2.eventName}
        // </ListItemText>
      })}






    </Container>
  );
}

export default EventLinks