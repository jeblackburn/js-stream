import React from 'react';
import Kittens from './components/kittens';
import Puppies from './components/puppies';
import KittensUrls from './components/kittensUrls'
import PuppiesUrls from "./components/puppiesUrls";
import {ImageService} from './service/imageService';
import {store} from './store';
import {Provider} from 'react-redux';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <div id="control-panel">
            <button onClick={ImageService.startImageFeeds}>Start the Show</button>
            <button onClick={ImageService.stopImageFeeds}>Stop</button>
          </div>
          <Provider store={store}>
            <Puppies/>
            <Kittens/>
            <PuppiesUrls/>
            <KittensUrls/>
          </Provider>
        </div>
      </header>
    </div>
  )
}

export default App;
