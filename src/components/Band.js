import React from 'react'

export default function Band({band, removeBand }) {
  return (
    <div>
        {console.log(removeBand)}
        <li>{band.name}</li>
        <button onClick={() => removeBand(band.id)} >delete </button>
    </div>
  )
}
