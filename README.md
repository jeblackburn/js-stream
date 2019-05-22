## Motivation

I'm really uncomfortable with Redux and all the boilerplate/magic/obfuscation it introduces, for three reasons.

1. Boilerplate/magic/obfuscation.
2. Get past all that and you're left with an architecture that, in every other context, we view as an anti-pattern: The Big Central Repo Serving The World. On the server, it's considered an antipattern to have a big-ass database in the middle, serving state to many components. We recommend a message-passing approach with each component managing its state internally. Why is that not an antipattern on the client?
3. Even in-process, having a big central repository of state is something many parts of the community are moving away from (or should be, IMHO). Frameworks like Akka/Akka.Net, Spring Cloud Data Flow, and languages like Clojure and Haskell take the position that this is the best way to build complex systems from simple blocks that don't know much about each other.

This repo presents an alternative. It leverages React, React Hooks, and a trivial message broker to demonstrate a simple, decoupled, lightweight approach to propagating state from sources to consumers. The consumers (React pure functional components) are tiny, have no parent-child relationships to manage as with React Context, and know nothing about anything except the broker. I like it.


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm install`

Downloads the Internet into node_modules.

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
