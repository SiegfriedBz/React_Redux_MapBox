import flats from "../flats"

export const [ SET_FLATS, SELECT_FLAT ] = [ 'SET_FLATS','SELECT_FLAT']

export function setFlats() {
  return {
    type: SET_FLATS,
    payload: flats
  }
}

export function selectFlat(flat) {
  return {
    type: SELECT_FLAT,
    payload: flat
  }
}
