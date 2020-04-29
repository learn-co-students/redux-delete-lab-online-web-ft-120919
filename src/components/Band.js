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
      <div>
          <span>{props.band.bandName}</span>
          <button
          onClick={() => props.delete(props.band.id)}
          >DELETE</button>
      </div>
  )
}
  


export default Band
