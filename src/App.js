import React from "react";
import Wrapper from "./components/Wrapper/Wrapper"
import Events from './pages/MyEvents'
import Home from './pages/Home'
import { BrowserRouter as Router, Route } from "react-router-dom";


function App() {
    return( 
        <Router>
               <div>
         <Wrapper>
             <Route exact path ="/" component={Home}/>
             <Route exact path ="/events" component={Events}/>


            </Wrapper>
            </div>

        </Router>
    
   
    
    )
}

export default App;
