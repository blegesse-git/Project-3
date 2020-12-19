import React, { useState } from 'react';
import Link from '@material-ui/core/Link';
import { useEventHook } from '../../hooks/Hooks';
import { Container } from '@material-ui/core';
import EventTabs from "./EventTabs";



function EventLinks(props) {



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
  


  return (
    <Container>
      {eventHook.events.map((event2) => {
        return <Link
          key={event2._id}
          component="button"
          variant="body1"
          style={{ color: 'black', fontSize: 18, textDecoration: "underline" }}
          onClick={() => checkLinks(event2)}
        >
          {event2.eventName}
        </Link>
      })}
    </Container>
  );
}

export default EventLinks