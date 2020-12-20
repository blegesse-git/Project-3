import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { useEventHook } from '../../hooks/Hooks';
import { Container } from '@material-ui/core';
import EventTabs from "./EventTabs";
import List from '@material-ui/core/List';
import EventIcon from '@material-ui/icons/Event';
import { Link } from "react-router-dom";
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import StarBorder from '@material-ui/icons/StarBorder';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import "./style.css"

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
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };


  return (
    <Container>




      
        <ListItem button onClick={handleClick} >
        <ListItemIcon>
          <EventIcon className="eventIcon"/>
        </ListItemIcon>
        <ListItemText>
          <Typography style={{ fontWeight: 1000, fontSize: 18}} id="eventIcon"> Events</Typography>
        </ListItemText>
        {open ? <ExpandLess style={{ fontSize: 1 }}/> : <ExpandMore style={{ fontSize: 1 }}/>}
      </ListItem>
      {eventHook.events.map((event2) => {
        return <Collapse in={open} timeout="auto" unmountOnExit key={event2._id} onClick={() => checkLinks(event2)}>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <Link to="/events" className="link" >

                <ListItemText>{event2.eventName}</ListItemText>
              </Link>
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