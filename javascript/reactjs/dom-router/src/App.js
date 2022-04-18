import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link, useRouteMatch, useParams } from "react-router-dom"
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/kebab">Kebab</Link>
          </li>
        </ul>

        <hr />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/kebab">
            <Kebab />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
      <p>Let's add here some links and things to kind of build up the page....</p>
    </div>
  ); 
}

function Kebab() {
  let { path, url } = useRouteMatch();

  return (
    <div>
        <ul>
          <li>
            <Link to={`${url}/linkpark`}>Linking in the park</Link>
          </li>
          <li>
            <Link to={`${url}/badmusic`}>Bad bad bad...</Link>
          </li>
        </ul>

        <Switch>
          <Route exact path={path}>
            <h4>Stop listening to bad music</h4>
          </Route>
          <Route path={`${path}/:messageBla`}>
            <Title />
          </Route>
        </Switch>
    </div>
  );
}

function Title() {
  let { messageBla } = useParams();

  return(
    <div>
      <h3>{messageBla}</h3>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
      <p>My stupid lazy website</p>
    </div>
  );
}

export default App;
