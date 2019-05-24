import React, { useReducer } from 'react';
import { Puppies, PuppiesUrls } from './components/puppies';
import { Kittens, KittensUrls } from './components/kittens';
import { startImageFeeds, stopImageFeeds } from "./service/imageService";
import { KITTENS, PUPPIES } from './topics';
import { setConsumer } from './service/imageService';

import './App.css';
import { useKittens, KittensContext, usePuppies, PuppiesContext } from "./containers/contexts";

function petsReducer(state, action) {
  switch (action.type) {
    case KITTENS: {
      return { ...state, kittensUrl: action.newUrl };
    }
    case PUPPIES: {
      return { ...state, puppiesUrl: action.newUrl };
    }
  }
}

function App() {
  let [petUrls, dispatchReducer] = useReducer(petsReducer, {});
  setConsumer(dispatchReducer);

  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <div id="control-panel">
            <button onClick={startImageFeeds}>Start the Show</button>
            <button onClick={stopImageFeeds}>Stop</button>
          </div>
          <KittensContext.Provider value={petUrls}>
            <PuppiesContext.Provider value={petUrls}>
              <Puppies />
              <Kittens />
              <PuppiesUrls />
              <KittensUrls />
            </PuppiesContext.Provider>
          </KittensContext.Provider>
        </div>
      </header>
    </div>
  )
}

export default App;
