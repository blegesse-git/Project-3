import React, { useState } from "react";
import Wrapper from "./components/Wrapper/Wrapper"
import Nav from "./components/Navbar/Nav"
import Events from './pages/MyEvents'
import Home from './pages/Home'
import ConfirmationPage from './pages/confirmation';
// import GetInspired from "./pages/GetInspired"
import Invoice from "./pages/invoice"
import RSVP from "./pages/rsvp/RSVP"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { EventProvider } from "./context/EventContext";
import "./App.css"


function App() {

    const [event, setEvent] = useState('');

    return (
        <EventProvider>
            <Router>
                <div>
                    <Nav setEvent={setEvent}/>
                    <Wrapper className="wrapper">
                    <Route exact path="/"> <Home setEvent={setEvent} eventState={event}/> </Route>
                        <Route exact path="/home"  ><Home setEvent={setEvent} eventState={event}/> </Route>
                        <Route exact path="/invoice"> <Invoice eventState ={event}/> </Route>
                        <Route exact path="/rsvp" > <RSVP eventState={event} setEvent={setEvent} /> </Route>
                        <Route exact path="/events" > <Events eventState={event}/></Route>
                        <Route exact path="/events/guests/:id/confirm" component={ConfirmationPage}></Route>
                    </Wrapper>
                </div>
            </Router>
        </EventProvider>


    )
}

export default App;