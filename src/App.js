import React from "react";
import Wrapper from "./components/Wrapper/Wrapper"
import ButtonAppBar from "./components/Navbar/index"
import Events from './pages/MyEvents'
import Home from './pages/Home'
// import GetInspired from "./pages/GetInspired"
// import Invoice from "./pages/Invoice"
// import RSVP from "./pages/RSVP"
import { BrowserRouter as Router, Route } from "react-router-dom";


function App() {
    return( 
        <Router>
               <div>
               <ButtonAppBar/>
         <Wrapper>
         
             <Route exact path ="/" component={Home}/>
             <Route exact path ="/home" component={Home}/>
             {/* <Route exact path ="/invoice" component={Invoice}/> */}
             {/* <Route exact path ="/rsvp" component={RSVP}/> */}
             <Route exact path ="/events" component={Events}/>
             {/* <Route exact path ="/inspo" component={GetInspired}/> */}
        

            </Wrapper>
        
            </div>

        </Router>
    
   
    
    )
}

export default App;
