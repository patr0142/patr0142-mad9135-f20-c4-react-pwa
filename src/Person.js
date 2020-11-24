import React from 'react'
import './Person.css'

function Person ({person}) {
  return (
    <div className="Person">
        <span className="lable">Name: </span>
        <span className="content">{person.name}</span>
    </div>
  )
}

export default Person
