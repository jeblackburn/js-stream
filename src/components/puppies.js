import React, { useEffect, useState } from 'react';
import { subscribe, unsubscribe } from '../broker/broker';
import topics from '../broker/topics';

export function Puppies() {
    let [puppiesUrl, setUrl] = useState();

    useEffect(() => {
        subscribe(topics.PUPPIES, setUrl);

        return () => unsubscribe(topics.PUPPIES, setUrl);
    }, [puppiesUrl])

    return (
        <div id="puppies">
            <img alt="Puppies!!!" src={puppiesUrl} />
        </div>
    )
}

export function PuppiesUrls() {
    let [urlsList, setUrlsList] = useState([]);

    subscribe(topics.PUPPIES, (newUrl) => setUrlsList([...urlsList, newUrl]));

    return (
        <div id="puppies-urls">
            <ul>
                {urlsList.map((url) => (
                    <li class="url-list-item">{url}</li>
                ))}
            </ul>
        </div>
    )
}