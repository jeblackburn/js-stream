import React from "react";
import { Puppies, PuppiesUrls } from './components/puppies';
import { Kittens, KittensUrls } from './components/kittens';
import { startImageFeeds, stopImageFeeds } from "./service/imageService";

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <div id="control-panel">
            <button onClick={startImageFeeds}>Start the Show</button>
            <button onClick={stopImageFeeds}>Stop</button>
          </div>
          <Puppies />
          <Kittens />
          <PuppiesUrls />
          <KittensUrls />
        </div>
      </header>
    </div>
  )
}

export default App;
