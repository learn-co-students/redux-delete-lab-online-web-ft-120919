import uuid from 'uuid'

export default function manageBand(state = {
  bands: []
}, action) {
  console.log('bandname', action)
  switch (action.type) {
    case 'ADD_BAND':
      const band = {
        id: uuid(),
        bandName: action.payload
      }
      return { bands: state.bands.concat(band)}
    case 'DELETE_BAND':
      // debugger
      return { bands: state.bands.filter(band => band.id!==action.id)}
    default:
      return state;
  }
};
