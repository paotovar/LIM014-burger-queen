import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
import Home from './components/Home';
import WaiterChoice from './components/WaiterChoice';
import MakeOrders from './components/MakeOrders';
import Kitchen from './view/Kitchen';


export default function App() {
  return (
    <Router>
      <div className="">
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/orders">
          <WaiterChoice/>
          </Route>
          <Route path="/orders-menu">
          <MakeOrders/>  
            </Route>   
            <Route path="/kitchen">
              <Kitchen/>
              </Route>    
        </Switch>
      </div>
    </Router>
  );
}


