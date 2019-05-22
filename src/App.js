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


// function useCounter(initialState = 0, updateTitle = false) {
//   let [count, setCount] = useState(initialState)
//   let decrement = () => setCount(count - 1)
//   let increment = () => setCount(count + 1)
//   useEffect(() => {
//     if (updateTitle) {
//       document.title = `Here is the count: ${count}`
//     } else {
//       console.log(`Not updating the title, count: ${count}`)
//     }
//   });
//   return { count, decrement, increment }
// };

// let Counter = createContainer(useCounter);

// function CounterDisplay({initialState, shouldUpdateTitle}) {
//   let counter = Counter.useContainer(initialState || 0, shouldUpdateTitle);
//   return (
//     <div>
//       <button onClick={counter.decrement}>-</button>
//       <span>{counter.count}</span>
//       <button onClick={counter.increment}>+</button>
//     </div>
//   )
// };

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//       <div>
//           <Counter.Provider>
//             <CounterDisplay shouldUpdateTitle={false}/>
//             <CounterDisplay shouldUpdateTitle={false}/>
//             <Counter.Provider initialState={3} shouldUpdateTitle={true}>
//               <CounterDisplay />
//             </Counter.Provider>
//           </Counter.Provider>
//       </div>
//       </header>
//     </div>
//   );
// }

export default App;
