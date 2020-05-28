import React from 'react'
import Band from './Band'

const Bands = props => {
  const bands = props.bands.map(band => {
    return (
      <Band 
        key={band.id} 
        band={band} 
        deleteBand={props.deleteBand} 
      />
    )
  })

  return (
    <div>
      <h1>BANDS</h1>
      {bands}
    </div>
  )
}

export default Bands;
