import React, {useContext, useEffect, useState} from 'react';
import {PuppiesContext} from '../containers/contexts';

export function Puppies() {
  let puppiesUrl = useContext(PuppiesContext);
  return (
    <div id="puppies">
      <img alt="Puppies!!!" src={puppiesUrl.puppiesUrl}/>
      {puppiesUrl}
    </div>
  )
}

export function PuppiesUrls() {
  let [urlsList, setUrlsList] = useState([]);
  let puppiesContext = useContext(PuppiesContext);

  useEffect(() =>
    puppiesContext.puppiesUrl && setUrlsList([...urlsList, puppiesContext.puppiesUrl]),
    [puppiesContext.puppiesUrl]);

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
