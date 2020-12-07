import React from "react";
// import ToDoList from "../components/List/ToDoList"
import Container from "../components/Container/index"
import SetReminder from "../components/SetReminder/SetReminder"
import OutlinedTimeline from "../components/Time line/Timeline"
import EventTimeline from "../components/Countdown/EventCountdown"
function Home(){

    return(
        <>
        <Container>
        <EventTimeline/>
        <OutlinedTimeline/>
        <SetReminder/>
     
       
    
        </Container>
      
        </>
    )

}

export default Home;