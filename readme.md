
ReactElement(Object)=>HTML(Browser Understands)

Jest is a JavaScript testing framework, mainly used to test JavaScript and Node.js applications (especially React apps).
RUN  this command for testing ( npx jest)

What Jest is used for -
Run unit tests and integration tests
Check that functions return expected results
Test React components
Create snapshot tests for UI

Key features -
Zero-config setup (works out of the box)
Built-in test runner, assertions, and mocking
Fast tests with parallel execution
Automatic test discovery (*.test.js, *.spec.js)
-----------------------------------------------------

Webpack is a module bundler.**[Bundle & optimize assets]

What it does -
Takes many files (JS, CSS, images, etc.)
Bundles them into one or a few optimized files
Makes your app faster and browser-friendly  

Why it’s used
Handles imports (import x from './file')
Optimizes code for production
Supports loaders (Babel, CSS, images)
-------------------------------------------

A parser is a tool that reads code and understands its structure.

What it does **[Understand & analyze code]
Converts code into a structure (AST – Abstract Syntax Tree)
Helps tools analyze or transform code
---------------------------------------------

Vite is a modern frontend build tool (alternative to Webpack). 
**[Fast dev server + bundler]

What it does
Super-fast dev server ⚡
Uses native ES modules
Bundles for production using Rollup

Why developers like Vite
Instant startup
Faster hot reload
Less configuration than Webpack
-----------------------------------------------

Parcel is a web application bundler, similar to Webpack and Vite, but with a big focus on zero configuration.

🚀 What Parcel does
Bundles JavaScript, CSS, HTML, images
Automatically handles dependencies
Runs a dev server
Optimizes code for production
You usually don’t need config files to start.

✨ Why Parcel is popular
Zero-config (just works)
Fast builds using caching
Automatic code splitting
Built-in support for many file types
---------------------------------------------

npm install -D parcel (meaning of -D)
There are 2 types of dependency 
1.web dependency
2.normal dependency