import React from 'react';
import HomePage from './pages/HomePage/HomePage';
import {
  Switch,
  Route,
} from 'react-router-dom';
import Shop from './pages/shop/Shop';
import Header from './Components/Header/Header';
import Sign from './pages/SignUp_SignIn_Page/Sign';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapshot => {
            this.setState({
              currentUser: {
                id: snapshot.id,
                ...snapshot.data()
              }
            });
        })
      }else{
        this.setState({
          currentUser: userAuth
        })
      }
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
