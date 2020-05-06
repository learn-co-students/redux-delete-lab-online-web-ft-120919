import uuid from 'uuid';

export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
      return { ...state, bands: [...state.bands, { name: action.name ? action.name : action.band, id: uuid() }] }
    case 'DELETE_BAND':
      console.log("ACTION", action)
      console.log("STATE", state)
      return { bands: state.bands.filter(band => band.id !== action.id) }
    default:
      return state;
  }
};
