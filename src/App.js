import React from 'react';
import HomePage from './pages/HomePage/HomePage';
import {
  Switch,
  Route,
} from 'react-router-dom';
import Shop from './pages/shop/Shop';
import Header from './Components/Header/Header';
import Sign from './pages/SignUp_SignIn_Page/Sign';
import {auth} from './firebase/firebase.utils';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null
    }
  }
//   const nav = (props) => {
//     console.log(props) returns props regarding the location or href because we have used the route
//     return(
//     <div>
//       <Link to="/">Home</Link>
//       <h1>Hats</h1>
//     </div>
//   )
// }
  unsubscribeFromAuth = null;
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser : user});
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
      return (
        <>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/sign-in" component={Sign} />
          <Route exact path="/shop" component={Shop} />
        </Switch>
        </>
      );
    }
  }

export default App;
