import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import Fact from './Fact'
import './Catfacts.css'

function Catfacts () {
  const [facts, setFacts] = useState()
  //console.log("facts in Catfacts: ", facts)

  useEffect(() => {
    getFacts().then(
      response => {
        //console.log(response)
        setFacts(response.all)
      }
    )
  }, [])

  async function getFacts () {  
    const URL = `https://cat-fact.herokuapp.com/facts`

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
    <div className="Catfacts">
        <p>
         <Link className="backBtn" to="/">BACK</Link>
          List of cat facts
        </p>
        {facts &&
          facts.map(fact => (
            <Fact 
              key={fact._id}
              fact={fact}
            />
        ))}
    </div>
  )
}

export default Catfacts
