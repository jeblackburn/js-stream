import {KITTENS, PUPPIES} from "../topics";
import {store} from '../store';

export function kittensAction(newUrl) {
  return {type: KITTENS, newUrl};
}

export const dispatchKittensUrl = newUrl => store.dispatch(kittensAction(newUrl));

export function puppiesAction(newUrl) {
  return {type: PUPPIES, newUrl};
}

export const dispatchPuppiesUrl = newUrl => store.dispatch(puppiesAction(newUrl));