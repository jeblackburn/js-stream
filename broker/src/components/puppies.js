import React, { useEffect, useState } from 'react';
import { subscribe, unsubscribe } from '../broker/broker';
import topics from '../broker/topics';

export function Puppies() {
    let [puppiesUrl, setUrl] = useState();

    useEffect(() => {
        console.log('Subscribe puppies');
        subscribe(topics.PUPPIES, setUrl);

        return () => {
            console.log('Unsubscribe puppies');
            unsubscribe(topics.PUPPIES, setUrl);
        }
    }, []);

    return (
        <div id="puppies">
            <img alt="Puppies!!!" src={puppiesUrl} />
            {puppiesUrl}
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
                    <li key={url} className="url-list-item">{url}</li>
                ))}
            </ul>
        </div>
    )
}