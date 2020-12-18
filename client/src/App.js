import React from "react";
import Wrapper from "./components/Wrapper/Wrapper"
import Nav from "./components/Navbar/Nav"
import Events from './pages/MyEvents'
import Home from './pages/home'
import EventTabs from "./components/Navbar/EventTabs"


// import GetInspired from "./pages/GetInspired"
import Invoice from "./pages/invoice"
import RSVP from "./pages/rsvp/RSVP"

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { EventProvider } from "./context/EventContext";



function App() {
    return (
        <EventProvider>
            <Router>
                <div>
                    <Nav />

                    <Wrapper>
                        

                        <Route exact path="/" component={Home} />
                        {/* <EventTabs /> */}
                        <Route exact path="/home" component={Home} />
                        <Route exact path="/invoice" component={Invoice} />
                        <Route exact path="/rsvp" component={RSVP} />
                        <Route exact path="/events" component={Events} />
                  
                    </Wrapper>
                </div>
            </Router>
        </EventProvider>


    )
}

export default App;
