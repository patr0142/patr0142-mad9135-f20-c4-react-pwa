import React, {useRef, useEffect} from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './Home'
import Peoplestarwars from './Peoplestarwars'
import Catfacts from './Catfacts'
import InstallPWA from './InstallPWA'
import {LocalStorage} from './LocalStorage'
import './App.css';


function App() {

  console.log('In the App')
  const numberOfVisiting = useRef(LocalStorage.getLocalstorage().numberOfVisiting)
  console.log(`numberOfVisiting.current: ${numberOfVisiting.current} in the app`)
  useEffect(() => {
    LocalStorage.increase()
  }, [])


  return (
    <div className="App">
      {
        //After the user has visited the main page of the app three times, prompt to install.
        //Considering the ncrement of the number of visiting in useEffect, the condition is set as 'more than 2'.
        numberOfVisiting.current > 2 ? <InstallPWA/>:<></>
      }
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
