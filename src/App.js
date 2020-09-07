import React from 'react';
import HomePage from './pages/HomePage/HomePage';
import {
  Switch,
  Route,
  Link
} from 'react-router-dom';
import './App.css';

function App() {
  const nav = (props) => {
    console.log(props)
    return(
    <div>
      <Link to="/">Home</Link>
      <h1>Hats</h1>
    </div>
  )
}
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/hats" component={nav} />
    </Switch>
  );
}

export default App;
