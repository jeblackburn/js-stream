import {KITTENS, PUPPIES} from "../topics";

export const reduxReducer = (state = {}, action) => {
  switch (action.type) {
    case KITTENS: {
      return {...state, kittensUrl: action.newUrl}
    }
    case PUPPIES: {
      return {...state, puppiesUrl: action.newUrl}
    }
    default:
      return state;
  }
}