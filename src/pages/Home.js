import React from "react";
import ToDoList from "../components/List/ToDoList"
import Container from "../components/Container/index"
import SetReminder from "../components/SetReminder/SetReminder"
import OutlinedTimeline from "../components/Time line/Timeline"
function Home(){

    return(
        <>
        <Container>
        <ToDoList/>
        <SetReminder/>
        <OutlinedTimeline/>
    
        </Container>
      
        </>
    )

}

export default Home;