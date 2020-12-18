import React, { useState } from 'react';
import Link from '@material-ui/core/Link';
import { useEventHook } from '../../hooks/Hooks';
import { Container } from '@material-ui/core';
import EventTabs from "./EventTabs";



 function EventLinks() {

    
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





  return (
    <Container>
      {eventHook.events.map((event) => {
   return <Link
    key={event._id}
      component="button"
      variant="body1"
      style={{color: 'black', fontSize: 18, textDecoration:"underline"}}
    >
     {event.eventName}
    </Link>
       })}
    </Container>
  );
}

export default EventLinks