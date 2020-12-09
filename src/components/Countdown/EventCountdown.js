import React from 'react';
import Container from "../Container/index"
// import Countdown from 'react-countdown';
import Countdown, { zeroPad, calcTimeDelta, formatTimeDelta } from 'react-countdown';



function EventCountdown(){
    // Random component
const Completionist = () => <span>Today is the day!</span>;
// const startCountdown = newDate("January 1, 2021 00:00:00").getTime();
// const now = newDate().getTime();
// const distance =startCountdown - now;

// const days = Math.floor(distance / (1000 * 60 * 60 * 24));
// const hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 *60*60));
// const minutes = Math.floor(distance % (1000 * 60 * 60 ))/(1000 * 60);


// Renderer callback with condition
const renderer = ({days, hours, minutes, completed}) => {
  if (completed) {
    // Render a completed state
    return <Completionist />;
  } else {
    // Render a countdown
    return   <span>{zeroPad(days)}:{zeroPad(hours)}:{zeroPad(minutes)};</span> 
  }

};

return(

    <Container>
        <h1> The Event Will Start In...</h1>
        <Container>
        <Countdown
        
        date ={Date.now() +1000 *60 * 60* 24}


        />,
        </Container>
    </Container>
)
}


export default EventCountdown;
