import React from 'react';
import Link from '@material-ui/core/Link';
import { useEventHook } from '../../hooks/Hooks';
import { Container } from '@material-ui/core';
import EventTabs from "./EventTabs";



 function EventLinks() {

  function tabLink(){

   <EventTabs/>
   console.log("tabs clicked")
    }

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
      variant="body2"
    onClick ={tabLink}
      style={{color: 'black'}}
    >
     {event.eventName}
    </Link>
       })}
    </Container>
  );
}

export default EventLinks