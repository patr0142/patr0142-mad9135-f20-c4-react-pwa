import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import Person from './Person'
import './Peoplestarwars.css'

function Peoplestarwars () {
  const [people, setPeople] = useState()

  useEffect(() => {
    getPeople().then(
      response => setPeople(response.results)
    )
  }, [])

  async function getPeople () {
    const URL = `https://swapi.dev/api/people/`

    try {
      const response = await fetch(URL)
      if (!response.ok) 
      throw new Error(response.statusText)
      return response.json()
    } catch (error) {
      // handle error
      console.log(error)
    }
  }

  return (
    <div className="Peoplestarwars">
        
        <p> 
          <Link className="backBtn" to="/">BACK</Link>
          People from Starwars
        </p>
        {people &&
          people.map((person,index) => (
            <Person 
              key={index}
              person={person}
            />
        ))}
    </div>
  )
}

export default Peoplestarwars
