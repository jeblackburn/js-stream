import React, { useReducer } from 'react';
import { Puppies, PuppiesUrls } from './components/puppies';
import { Kittens, KittensUrls } from './components/kittens';
import { KITTENS, PUPPIES } from './topics';
import { ImageService } from './service/imageService';

import './App.css';
import { KittensContext, PuppiesContext } from "./containers/contexts";

function puppiesReducer(state, action) {
  console.log('PuppiesReducer', state, action);
  switch (action.type) {
    case PUPPIES: {
      return { puppiesUrl: action.newUrl };
    }
    default: {
      return state;
    }
  }
}

function kittensReducer(state, action) {
  console.log('KittensReducer', state, action);
  switch (action.type) {
    case KITTENS: {
      return { kittensUrl: action.newUrl };
    }
    default: {
      return state;
    }
  }
}

function App() {
  let [puppy, dispatchPuppyUrl] = useReducer(puppiesReducer, {});
  let [kitten, dispatchKittenUrl] = useReducer(kittensReducer, {});
  ImageService.setPuppiesConsumer(dispatchPuppyUrl);
  ImageService.setKittensConsumer(dispatchKittenUrl);

  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <div id="control-panel">
            <button onClick={ImageService.startImageFeeds}>Start the Show</button>
            <button onClick={ImageService.stopImageFeeds}>Stop</button>
          </div>
          <KittensContext.Provider value={kitten}>
            <PuppiesContext.Provider value={puppy}>
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
