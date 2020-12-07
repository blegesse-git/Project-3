import React from 'react';
import Container from "../Container/index"
import Countdown from 'react-countdown';



function EventCountdown(){
return(
    <Container>
        <h1> Let's Celebrate in.... </h1>
        <Container>
        <Countdown
    date={Date.now() + 10000}
    intervalDelay={0}
    precision={3}
    renderer={props => <div>{props.total}</div>}
  />,
        </Container>
    </Container>
)
}


export default EventCountdown;
