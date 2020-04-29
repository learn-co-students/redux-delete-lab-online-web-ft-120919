import uuid from 'uuid'

export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {
    
    case 'ADD_BAND':
      const band = {
        id: uuid(),
        bandName: action.payload
      }

      // return { ...state, bands: [...state.bands, action.name] }
      // console.log({ bands: state.bands.concat(band)})
      return { bands: state.bands.concat(band)}
    case 'DELETE_BAND':
      return { bands: state.bands.filter(band => band.id!==action.payload)}
    default:
      return state;
  }
};
