import React, { useReducer } from 'react';
import { Puppies, PuppiesUrls } from './components/puppies';
import { Kittens, KittensUrls } from './components/kittens';
import { KITTENS, PUPPIES } from './topics';
import { ImageService } from './service/imageService';

import './App.css';
import { KittensContext, PuppiesContext } from "./containers/contexts";

function petsReducer(state, action) {
  switch (action.type) {
    case KITTENS: {
      return { ...state, kittensUrl: action.newUrl };
    }
    case PUPPIES: {
      return { ...state, puppiesUrl: action.newUrl };
    }
    default: {
      return state;
    }
  }
}

function App() {
  let [petUrls, dispatchReducer] = useReducer(petsReducer, {});
  ImageService.setConsumer(dispatchReducer);

  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <div id="control-panel">
            <button onClick={ImageService.startImageFeeds}>Start the Show</button>
            <button onClick={ImageService.stopImageFeeds}>Stop</button>
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
