import React from 'react'
import './Fact.css'

function Fact ({fact}) {
  return (
    <div className="Fact">
        <li>{fact.text}</li>
    </div>
  )
}

export default Fact
