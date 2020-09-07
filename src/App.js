import React from 'react';
import HomePage from './pages/HomePage/HomePage';
import {
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Shop from './pages/shop/Shop';
import './App.css';

function App() {
//   const nav = (props) => {
//     console.log(props) returns props regarding the location or href because we have used the route
//     return(
//     <div>
//       <Link to="/">Home</Link>
//       <h1>Hats</h1>
//     </div>
//   )
// }
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      {/* <Route exact path="/hats" component={nav} /> */}
      <Route exact path="/shop" component={Shop} />
    </Switch>
  );
}

export default App;
