# IMP COMMANDS - 

- npm init
- npm install -D parcel
- npx parcel index.html
- npm install react / npm i react
- npm install react-dom / npm i react-dom
- npm i react-router-dom

-----------------------------


- D:\Namaste-React>npx parcel index.html
Server running at http://localhost:1234
✨ Built in 1.01s

- D:\Namaste-React>npx parcel build index.html
✨ Built in 3.03s

dist\index.html                       302 B     82ms
dist\style.1ec981cb.css                48 B    139ms
dist\Namaste-React.70602bad.js    192.31 kB    842ms


------------------------------------------

ReactElement(Object)=>HTML(Browser Understands)

# Jest
It is a JavaScript testing framework, mainly used to test JavaScript and Node.js applications (especially React apps).
RUN  this command for testing ( npx jest)

What Jest is used for -
- Run unit tests and integration tests
- Check that functions return expected results
- Test React components
- Create snapshot tests for UI

Key features -
- Zero-config setup (works out of the box)
- Built-in test runner, assertions, and mocking
- Fast tests with parallel execution
- Automatic test discovery (*.test.js, *.spec.js)

-----------------------------------------------------

Webpack is a module bundler.**[Bundle & optimize assets]

What it does -
- Takes many files (JS, CSS, images, etc.)
- Bundles them into one or a few optimized files
- Makes your app faster and browser-friendly  

Why it’s used
- Handles imports (import x from './file')
- Optimizes code for production
- Supports loaders (Babel, CSS, images)

-------------------------------------------

A parser is a tool that reads code and understands its structure.

What it does **[Understand & analyze code]
- Converts code into a structure (AST – Abstract Syntax Tree)
- Helps tools analyze or transform code

---------------------------------------------

# Vite -
It is a modern frontend build tool (alternative to Webpack). 
**[Fast dev server + bundler]

What it does
- Super-fast dev server ⚡
- Uses native ES modules
- Bundles for production using Rollup

Why developers like Vite
Instant startup
Faster hot reload
Less configuration than Webpack

-----------------------------------------------

Parcel is a web application bundler, similar to Webpack and Vite, but with a big focus on zero configuration.

# Parcel
- Dev Build
- Local Server
- HMR = Hot module replacement
- File watching Algorithm - written in c++
- Caching - Faster Builds
- Image Optimisation
- Minification
- Bundling 
- compress file size
- consistent hashing 
- code splitting 
- Differential Bundling - support older browsers
- Diagonistic
- Error Handling 
- Https 
- Tree Shaking - remove unused code
- Different dev and prod bundles 
 
--------------------------------------------------

# 🚀 What Parcel does
- Bundles JavaScript, CSS, HTML, images
- Automatically handles dependencies
- Runs a dev server
- Optimizes code for production
- You usually don’t need config files to start.

# ✨ Why Parcel is popular
- Zero-config (just works)
- Fast builds using caching
- Automatic code splitting
- Built-in support for many file types

---------------------------------------------

npm install -D parcel (meaning of -D)
There are 2 types of dependency 
1.web dependency
2.normal dependency

------------------------------
# What is Browserslist?
- It defines which browsers your project supports, so build tools know:
- what JS to transpile
- what CSS prefixes to add

-------------------------------


# props- Normal argument to a function
- similiar to a pass argument to a function 
- props are read-only: A child component cannot modify its props. They are meant to be immutable.
- Props are passed down from parent to child, allowing for reusable components.
- You can pass any type of data as props: strings, numbers, arrays, objects, functions, etc.

-----------------------------------

# config driven UI
A Config-Driven UI means your UI is controlled by data (config) instead of hard-coding everything in JSX.
Change the config, and the UI changes automatically — no JSX edits needed.

Why Config-Driven UI?
- Reusable components
- Dynamic UI from API data
- Easy to scale
- Used in real apps (Swiggy, Netflix, Amazon)

** Config-Driven UI means rendering UI based on configuration/data received from backend instead of hard-coding UI elements.

- index as a key is generally considered an anti-pattern, especially in UI frameworks like React, Vue, or similar virtual-DOM systems.
- Keys are used to preserve identity of items between renders. An index does not represent identity—only position.
Rule of thumb
- If the list can change, index-as-key is wrong.
            more bluntly:
- Keys represent identity, not position.
- Not using (not acceptable) <<<< index <<<<< unique id (best practice)

-------------------------------------------------------------------------------------

Two types of Export/Import 
- Default Export/Import 

export default Component;
import Component from "path";

- Named Export/Import

export const Component;
import {Component} from "path"

------------------------------------------------

# React Hooks
- {Normal JS utility Function }
- useState() - provides powerful state variable
- useEffect()

# 2 types Routing in web pages
- client side Routing
- Server side Routing 

** what do you mean by SPA ?
- SPA stands for Single-Page Application, a web app that loads once and updates content dynamically without reloading the page.


** When stateVariable updates react will re-render all the components.


# reconciliation algorithm

** In React, the reconciliation algorithm is the process React uses to efficiently update the UI when state or props change.







# React Fiber 
React’s modern reconciliation engine (introduced in React 16) that replaces the old stack-based reconciler. Its goal is to make rendering interruptible, incremental, and prioritizable.

Why React Fiber exists
The old React reconciler:
- Rendered synchronously
- Could block the main thread
- Caused UI jank in large apps
- Fiber fixes this by breaking rendering work into small units.


#  diff algorithm 
(part of the reconciliation process) is the method React uses to compare two Virtual DOM trees and determine the minimum changes needed to update the real DOM.

What is the Diff Algorithm?
- The diffing algorithm compares:
- Previous Virtual DOM
- New Virtual DOM
- Then React updates only what changed, not the entire DOM.


** why react fast ?
b'z react is doing efficient DOM manipulation. how ? b'z of virtual dom.

# useEffect
useEffect is a React Hook used to run code after a component renders.
Think of it as a way to handle side effects like fetching data, updating the DOM, or setting timers.
** First Body rendered then useEffect Called next. **

useEffect(() => {
  // code to run
}, [dependencies]);


** what fetch will return ? fetch() returns a Promise.
- Immediately returns a Promise
- That Promise resolves to a Response object, not the actual data.

const result = fetch(url);
console.log(result); // Promise


# class-based component

A class-based component is a JavaScript class that:
- extends React.Component
- uses a render() method to return JSX
- manages state with this.state
- updates state with this.setState()


Key features
- State: this.state
- Props: this.props

# Lifecycle methods:

- componentDidMount()
- componentDidUpdate()
- componentWillUnmount()
Requires this binding (or arrow functions)

** when we should go for class based / functional component in react

In modern React, the default choice is functional components, but class-based components still matter in specific situations. Here’s a clear, practical way to decide 👇

✅ Prefer Functional Components (Most of the time)

Use functional components when:

1. You’re starting a new project

Hooks (useState, useEffect, useContext, etc.) replace class features

Cleaner, shorter, easier to read and test

2. You need state, side effects, or lifecycle behavior

- Hooks cover everything:
- useEffect → lifecycle methods
- useState → state
- useRef → instance variables
- useMemo, useCallback → performance

👉 No need for classes anymore.

3. You want better reusability
- Custom hooks allow logic sharing

No render props or HOCs complexity

4. You care about future React features
- Concurrent rendering
- Server Components
- Suspense improvements
All are hook-first, function-focused.


⚠️ Use Class Components Only When Necessary

1. You’re maintaining legacy code
2. You depend on class-only patterns
3. Third-party libraries require them 


# Lifecycle Methods

🔄 React Class Component Lifecycle Methods
React lifecycle methods are divided into 3 main phases:

1️⃣ Mounting (Component is created & inserted into DOM)

- constructor()	 - Initialize state, bind methods
- static getDerivedStateFromProps()	- Sync state with props
- render()	- Returns JSX (pure method)
- componentDidMount()	 - Runs after first render (API calls, subscriptions)

2️⃣ Updating (Props or state changes)
- static getDerivedStateFromProps()	- Update state from props
- shouldComponentUpdate()	- Performance optimization
- render()	- Re-render UI
- getSnapshotBeforeUpdate()	- Capture DOM info
- componentDidUpdate() - 	React to updates (API calls, DOM ops)

3️⃣ Unmounting (Component removed from DOM)
- componentWillUnmount() - 	Cleanup (timers, listeners, subscriptions)

** Interview Tip (One-liner)
- “React lifecycle methods define what happens when a component mounts, updates, and unmounts. In modern React, Hooks replace lifecycle methods.”

# why api calls inside componentDidMount ?

API calls are placed inside componentDidMount() for correctness, performance, and predictability.
1️⃣ Component is fully mounted
- componentDidMount() runs after the first render, when:
- The component exists in the DOM
- It’s safe to update state using setState().

2️⃣ Avoid multiple API calls
- render() may run multiple times .
- Making API calls in render() or constructor() can cause repeated or infinite calls . 
- componentDidMount() runs only once during mounting.

4️⃣ Prevent blocking UI
- Initial render happens immediately
- API call runs after UI is shown
- Improves perceived performance (faster screen display) .

** “We make API calls in componentDidMount() because it runs once after the component is mounted, making it the safest place for side effects without causing repeated renders.”


# Higher order components 
What is a Higher-Order Component (HOC)?

A Higher-Order Component (HOC) is a pattern in React used to reuse component logic. It is a function that takes a component as an argument and returns a new component that typically extends or enhances the behavior of the original one.

In simple terms:
- HOCs are functions that take a component and return a new component.
- They don’t modify the original component, but rather, they add additional behavior or functionality.

# Why Do We Use HOCs?
- We use HOCs to reuse logic across multiple components without repeating the same code. HOCs are often used for things like:
- Code reuse: Sharing logic like authentication, data fetching, or logging.
- Cross-cutting concerns: For example, adding layout or theming logic across different pages in an app.
- Conditional rendering: Show or hide components based on conditions (like permissions or auth state).
- Enhancing components: Wrapping components with additional functionality without changing their core logic.

** HOCs vs Hooks

- HOCs → older pattern, still used in legacy code and libraries
- Hooks → preferred in modern React for sharing logic


# Redux Toolkit
- Redux and React are different libraries.
Zustand is another library .

- Install @reduxjs/toolkit and react-redux 
- Build our store
- Connect our store to our app 
- Slice (cartSlice)
- dispatch (action)
- Selector 

- Redux is a state management library—basically a way to keep your app’s data in one predictable place instead of scattered chaos.

The core idea (in human terms)
- Store → where all the app state lives
- Actions → “something happened” (plain objects like { type: 'ADD_TODO' })
- Reducers → pure functions that say how the state changes when an action happens
- Dispatch → the act of sending an action to the store


# Types of Testing 
- unit Testing
- Integration Testing
- End to end testing - e2e testing 

# Setting up testing in our app
- Install React Testing Library
- Install jest
- Installed Babel dependencies
- Configure Babel 
- Configure Parcel config file to disable babel transpilation 
- Jest configuration  [npx create-jest]
   |-> following ques. no , jsdom(browser-like) , yes, babel, y 
- Install jsdom library [npm install --save-dev jest-environment-jsdom]



