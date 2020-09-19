import React from 'react';
import HomePage from './pages/HomePage/HomePage';
import {
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Shop from './pages/shop/Shop';
import Header from './Components/Header/Header';
import Sign from './pages/SignUp_SignIn_Page/Sign';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/user.actions';
import './App.css';


class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const {setCurrentUser} = this.props

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapshot => {
            setCurrentUser({
              currentUser: {
                id: snapshot.id,
                ...snapshot.data()
              }
            });
        })
      }else{
        setCurrentUser(userAuth);
      }
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
      return (
        <>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact 
          path="/sign-in" 
          render={() => this.props.currentUser ? (<Redirect to='/' />) : (<Sign />)} />
          <Route exact path="/shop" component={Shop} />
        </Switch>
        </>
      );
    }
  }

const mapStateToProps = ({user}) => ({
  currentUser: user.currentUser
})

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentUser: user => dispatch(setCurrentUser(user))
  }
}  

export default connect(mapStateToProps, mapDispatchToProps)(App);
