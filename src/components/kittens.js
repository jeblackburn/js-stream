import React, { useState } from 'react';
import { KittensContainer } from '../containers/beasts';
import { subscribe } from '../broker/broker';
import topics from '../broker/topics';

export function Kittens() {
    let [kittensUrl, setKittensUrl] = useState();
    let [subscribed, setSubscribed] = useState(false);
    if (!subscribed) {
        setSubscribed(true);
        subscribe(topics.KITTENS, setKittensUrl);
    }
    return (
        <div id="kittens">
            <img alt="Kittens!!!" src={kittensUrl}></img>
        </div>
    );
}

export function KittensUrls() {
    let [urlsList, setUrlsList] = useState([]);

    subscribe(topics.KITTENS, (newUrl) => setUrlsList([...urlsList, newUrl]));

    return (
        <div id="kittens-urls">
            <ul>
                {urlsList.map((url) => (
                    <li class="url-list-item">{url}</li>
                ))}
            </ul>
        </div>
    )
}
