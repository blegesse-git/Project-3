import React, { useState, useEffect } from 'react'
import Container from "../Container/index"
import Countdown, { zeroPad, calcTimeDelta, formatTimeDelta } from 'react-countdown';
import { useEventHook } from '../../hooks/Hooks';
import { now } from 'mongoose';

import API from "../../utils/API"
function EventCountdown(props) {


  // console.log(props.eventState)
  const eventHook = useEventHook();

  let countdown= eventHook.events.filter(item => {
    let date = new Date(item.eventDate);
    return date > new Date ();
 })[0];
 console.log(countdown)

//


  // Random component
  const Completionist = () => <span>You have an event today!</span>;

  const countDownDate = ()=>  new Date (countdown.eventDate);
  console.log(countDownDate())
  // console.log(countDownDate)  
  function eventDateInterval(){
    var date = countDownDate - Date.now ();

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  }
  // Renderer callback with condition
  const renderer = ({ days, hours, minutes, completed }) => {
    if (completed) {
      // Render a completed state
      return <Completionist />;
    } else {
      // Render a countdown
      return <span>{zeroPad(days)}:{zeroPad(hours)}:{zeroPad(minutes)};</span>
    }

  };

  // add a filter to only display the upcoming event.

  return (

    <Container>
      <h1> Your next event starts in ... </h1>
      <Container>
        <Countdown
           
         
      
          // renderer = {renderer}


        />,

        </Container>

    </Container>
  )
}


export default EventCountdown;
