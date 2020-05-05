import uuid from 'uuid'

//Here is my big question: Nowhere in the code is it specified what attributes a Band object should have!
//Is it really just up to the 'ADD_BAND' action to decide that a band should have, say, a name and an id?
//In reality, should that information live in a database schema somewhere???
export default function manageBand(state = { bands: [] }, action) {

  switch (action.type) {
    case 'ADD_BAND':
      const newBand = {
        name: action.name,
        id: uuid()
      }
      return { ...state, bands: [...state.bands, newBand] }

    case 'DELETE_BAND':
      return { bands: state.bands.filter(band => band.id !== action.id) }

    default:
      return state;
  }//switch

}//manageBand
