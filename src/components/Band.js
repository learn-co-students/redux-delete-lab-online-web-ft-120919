import React from 'react';

// const Band = ({bands}) =>{


//   return bands.map(band => 
//      <li>{band.bandName}
//      <button
//       onClick={() => band.delete(band.id)}>
//         x
//      </button>
//   </li>)

// }

const Band = props => {
  return (
      <li>
          <span>{props.band.bandName}</span>
          <button
          onClick={() => props.delete(props.band.id)}
          >DELETE</button>
      </li>
  )
}
  


export default Band
