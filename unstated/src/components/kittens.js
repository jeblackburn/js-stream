import React, { useState, useContext, useEffect } from 'react';
import { KittensContext } from '../containers/contexts';

export function Kittens() {
    let { kittensUrl } = useContext(KittensContext);
    return (
        <div id="kittens">
            <img alt="Kittens!!!" src={kittensUrl}></img>
        </div>
    );
}

export function KittensUrls() {
    let [urlsList, setUrlsList] = useState([]);
    let kittenContext = useContext(KittensContext);
    
    useEffect(() => 
        {
            console.log(kittenContext);
            kittenContext.kittensUrl && setUrlsList([...urlsList, kittenContext.kittensUrl]);
        }, 
        [kittenContext.kittensUrl]);

    return (
        <div id="kittens-urls">
            <ul>
                {urlsList.map((url) => (
                    <li key={url} className="url-list-item">{url}</li>
                ))}
            </ul>
        </div>
    )
}
