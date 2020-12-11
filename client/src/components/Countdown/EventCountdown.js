import React from 'react';
import Container from "../Container/index"
import Countdown from 'react-countdown';



function EventCountdown(){
    // Random component
const Completionist = () => <span>You are good to go!</span>;

// Renderer callback with condition
const renderer = ({ hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <Completionist />;
  } else {
    // Render a countdown
    return <span>{hours}:{minutes}:{seconds}</span>;
  }
};
return(
    <Container>
        <h1> Countdown Will Go Here </h1>
        <Container>
        <Countdown
    date={Date.now() + 5000}
    renderer={renderer}
  />
        </Container>
    </Container>
)
}


export default EventCountdown;
