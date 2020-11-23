import React from 'react'
import {Link} from 'react-router-dom'
import './Home.css'

function Home () {
  return (
    <div className="Home">
        <p>People from Starwars and Cat Facts</p>
        <div id="contents_area">
          {/* <img id="worker_img" src={`/img/people_managing_todos.png`} alt="It is an image of worker" /> 
          <Link id="worker_link" className="btn" to="/peopletodos">People managing their todos</Link> */}
          <img id="starwars_img" src={`/img/people_starwars.png`} alt="It is people of  Starwars" />  
          <Link id="starwars_link" className="btn" to="/peoplestarwars">People form Starwars</Link>
          <img id="cat_img" src={`/img/cat.png`} alt="It is a cat" />  
          <Link id="cat_link" className="btn" to="/catfacts">List of cat facts</Link>
        </div>
    </div>
  )
}

export default Home
