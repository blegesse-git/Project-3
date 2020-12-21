import React, { useState, useEffect } from 'react'
import Container from "../Container/index"
import Countdown, { zeroPad, calcTimeDelta, formatTimeDelta } from 'react-countdown';
import { useEventHook } from '../../hooks/Hooks';
import { now } from 'mongoose';

import API from "../../utils/API"
function EventCountdown(props) {


  // console.log(props.eventState)
  const eventHook = useEventHook();
  // useEffect(() => {
  //   API.getAllEvents().then((data) => {
      // console.log(data);
      // var i 
      // for (i=0; i<data.data ; i++ ) {
      //   console.log(data.data[i].eventDate)
      // }
      // console.log(data.data[0].eventDate);
      // eventHook.replaceAllEvents(data.data);
    // })
    // console.log(data.data.eventDate)
  // },[])
  API.getAllEvents().then((data) => {
    // console.log(data.data.length);
    let datesArray = []
    for (let i=0; i<data.data.length ; i++ ) {
      // console.log(data.data[i].eventDate)
      const eventDates = [data.data[i].eventDate]
      // console.log(eventDates)
      const sortedDates = eventDates.sort((a, b) => a - b)
      // console.log(sortedDates)
      for (let j=0; j< eventDates.length; j++){
        // console.log( eventDates[j])
        const dateArrays= datesArray.push(eventDates)
        // console.log(datesArray[0])
      }
     
      console.log(datesArray)

    }
    // console.log(data.data[0].eventDate);
    // eventHook.replaceAllEvents(data.data);
  })

  // sortAscending = () => {
    // console.log(data.data.eventDate)

  
//   const [timer, setTimer] = useState("")
 
//   const [newTimer, setNewTimer] = useState([
// {
//   id: 1,
//   date: "Dec 23, 2020"
// }
//   ]);
  // const [timers, setTimers] = useState(props.eventState|| []);
  // con

  // Random component
  const Completionist = () => <span>You have an event today!</span>;

  const countDownDate = ()=>  new Date (props.setEvent.eventDate).getTime();
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
            date={countDownDate - Date.now ()}
         
      
          // renderer = {renderer}


        />,

        </Container>

    </Container>
  )
}


export default EventCountdown;
