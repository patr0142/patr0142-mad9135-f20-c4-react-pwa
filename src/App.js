import React from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './Home'
import Peoplestarwars from './Peoplestarwars'
import Catfacts from './Catfacts'
import InstallPWA from './InstallPWA'
import './App.css';




function App() {
  return (
    <div className="App">
       This is the structure of app
       <InstallPWA/>
      <Router>
        <Switch>
          <Route exact path="/"><Home></Home></Route> 
          <Route path="/peoplestarwars"><Peoplestarwars></Peoplestarwars></Route> 
          <Route path="/catfacts"><Catfacts></Catfacts></Route> 
        </Switch>
      </Router>
    </div>
  );
}

export default App;
