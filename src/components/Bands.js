import React from 'react';
import Band from './Band'

const Bands = props => {
  console.log(props.bands)
  const bands = props.bands.map(band => <Band key={band.id} name={band.name} id={band.id} deleteBand={props.deleteBand}/>)

  return (
    <div>
      {bands}
    </div>
  );

};

export default Bands;