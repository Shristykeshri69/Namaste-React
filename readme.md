# IMP COMMANDS - 

- npm init
- npm install -D parcel
- npx parcel index.html
- npm install react / npm i react
- npm install react-dom / npm i react-dom

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

