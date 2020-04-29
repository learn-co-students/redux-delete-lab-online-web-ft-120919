import React from 'react';


const Band = props => {
  debugger
  return (
      <li>
          <span>{props.name}</span>
          <button
          onClick={() => props.delete(props.id)}
          >DELETE</button>
      </li>
  )
}
  


export default Band
