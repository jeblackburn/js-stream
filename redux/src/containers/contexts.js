import {createContext, useState} from 'react';

export function usePuppies() {
  let [puppiesUrl, setPuppiesUrl] = useState();
  return {puppiesUrl, setPuppiesUrl};
}

export function useKittens() {
  let [kittensUrl, setKittensUrl] = useState();
  return {kittensUrl, setKittensUrl};
}

export const KittensContext = createContext();
export const PuppiesContext = createContext();