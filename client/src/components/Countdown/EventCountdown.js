import React, { useState, useEffect, useRef } from 'react'
import Container from "../Container/index"
import Countdown, { zeroPad, calcTimeDelta, formatTimeDelta } from 'react-countdown';
import { useEventHook } from '../../hooks/Hooks';
import { Typography } from '@material-ui/core';
import './style.css'

  function EventCountdown(props) {

  
  // const eventHook =  useEventHook();
  // const [time, setTime] = useState( new Date("2020-12-23"))
  // // 
  // let countDown= []
  // countDown = eventHook.events.sort((a,b) => b.eventDate - a.eventDate)
//   let countdown= eventHook.events.filter(item => {
//     console.log(item)
//     let dates = item.eventDate.split("-")
//     console.log(dates)
//     let date = new Date(dates[0], dates[1], dates[2]);
//     console.log(date)
//     console.log(new Date())
//     return date > new Date ();
//  });
// console.log(countdown[0])
 //this is out event info with eventDate nested in there:
//  console.log(countdown[0].eventDate)
// const setCountDown = () => {
// const  countDownDate = new Date("Dec 23, 2020").getTime()
// console.log(countDownDate)
// // const now = new Date().getTime();
// // console.log(now)
// const distance = countDownDate - new Date().getTime();
//  console.log(distance)
// }

// console.log(setCountDown())

//  useEffect(() => {

//       const timeout = setTimeout(() => {
       
//           const currentdate = new Date()
//           console.log(countDown[0])
//           let finalTime = ""
//           if (countDown[0]){
//             let dates = countDown[0].eventDate.split("-")
//             let date = new Date(dates[0], dates[1], dates[2]);
//             // console.log(date)
//             const difference = date.getTime() - currentdate
//             console.log(difference)
//             const newTime = convert(difference)
//             console.log(newTime)
//             finalTime = newTime.days + " : " + newTime.hours + " : " + newTime.minutes + " : " + newTime.seconds;
//           }
//           // let dates = countDown[0].eventDate.split("-")
//           // let date = new Date(dates[0], dates[1], dates[2]);
//           // const difference = date.getTime() - currentdate
//           // console.log(difference)
//           // const newTime = convert(difference)
          
//           setTime(finalTime || new Date( new Date("2020-12-23") )
        
//       }, 1000);
//       return () => {
//         // timeout
//         clearTimeout(timeout);
//       }
   
//     }, [time]);

// const convert = (time) => {
//   var days = Math.floor(time / (1000 * 60 * 60 * 24));
//   var hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   var minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
//   var seconds = Math.floor((time % (1000 * 60)) / 1000);
//   return {days, hours, minutes, seconds}
// }

    // Random component
  // const Completionist = () => <span>You have an event today!</span>;

  //this is today's date. 
  // const currentDate =  new Date().toLocaleDateString('pt-br').split( '/' ).reverse( ).join( '-' )
//   console.log(currentDate)
// console.log(countdown)





  const [time, setTime] = useState(new Date("Dec 23, 2020").toLocaleDateString('pt-br').split( '/' ).reverse( ).join( '-' ))
  const secondsPassed = useRef(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const date = new Date()
      secondsPassed.current = secondsPassed.current + 1;
      setTime(date.toLocaleDateString('pt-br').split( '/' ).reverse( ).join( '-' ))
    }, 1000);
    return () => {
      clearTimeout(timeout);
    }
  }, [time]);






  return (

    <Container>
      <h1 id="plan">PLAN <span id="partie"> PARTIE </span>REPEAT</h1>
     
     
    

    </Container>
   
  )
}


export default EventCountdown;



// const Timer = (props) => {
//   const [time, setTime] = useState(new Date().toLocaleTimeString());
//   const secondsPassed = useRef(0);

//   useEffect(() => {
//     const timeout = setTimeout(() => {
//       const date = new Date()
//       secondsPassed.current = secondsPassed.current + 1;
//       setTime(date.toLocaleTimeString());
//     }, 1000);
//     return () => {
//       clearTimeout(timeout);
//     }
//   }, [time]);

//   return (
//     <div>
//       <div>{time}</div>
//       <div>{secondsPassed.current}</div>
//     </div>
//   )
// }
