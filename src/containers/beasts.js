import { useState } from 'react';
import { createContainer } from 'unstated-next';

export function usePuppies() {
    let [url, setUrl] = useState();
    return { url, setUrl };
}

export function useKittens() {
    let [url, setUrl] = useState();
    return { url, setUrl };
}

export const KittensContainer = createContainer(useKittens);
export const PuppiesContainer = createContainer(usePuppies);
