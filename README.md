#  Basic setup FOCUS ON REACT ROUTER / REACT CONTEXT / CRUD

### 1. setup react project/github
> any notes about this step you want

```
$ yarn create react-app <project-name>
// comment here
$ cd  <project-name>
$ git remote add origin ssh-link
$ git add .
$ git commit -m 'init'
$ git push origin master
$ yarn start
``` 

### 2. Add any 3rd libraries you know you are going to be using
> These will change, but some common ones, axios, react-router

```
$ yarn add axios
$ yarn add react-router-dom@6
```

# BASIC REACT ROUTER SETUP
1. make sure  react-router-dom@6 is installed

```
$ yarn add react-router-dom@6
```

2. Setup BrowserRouter in update index.js

```javascript
import { BrowserRouter} from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
```

3. Create your pages(components)

``` javascript

const Users = ()=>{
    return (
        <div>
            <h1>Users Page</h1>
        </div>
    )
}

export default Users

const About = ()=>{
    return (
        <div>
            <h1>About Page</h1>
        </div>
    )
}

export default About
```

4. basic App.js setup demo
```javascript
import logo from './logo.svg';
import './App.css';
import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <div>
      <h1>Users App</h1>
      <nav
        style={{
          border:'2px solid green'
        }}
        >
          <Link to='/users'>Users</Link> - {' '}
          <Link to='/about'>About</Link>
        </nav>
        <Outlet />
    </div>
  );
}

export default App;
```

index.js
```javascript
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Users from "./pages/Users";
import About from "./pages/About";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/users" element={<Users />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

```
