export default function manageBand(state = {
  bands: [],
}, action) {
  switch(action.type) {
    case "ADD_BAND":
      return {...state, bands: state.bands.concat(action.name)}
    case "DELETE_BAND":
      return {...state, bands: state.bands.filter(band => band.id !== action.id)}
    default:
      return state
  
  }
};
