import React, {useEffect} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Header from './components/header/header.component'
import HomePage from './pages/homepage/homepage.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import ShopPage from './pages/shoppage/shop.component';
import CheckoutPage from './pages/checkout/checkout.component';

import './App.css';
import { selectCurrentUser} from './redux/user/user.selector';
import { checkUserSession } from './redux/user/user.actions';

 

const App = ({ checkUserSession, currentUser }) => {
 
  useEffect(() => {
    checkUserSession()
  }, [checkUserSession]);
  // unsubscribeFromAuth = null;

  // componentDidMount() {
    // checkUserSession();
    // this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    //   if(userAuth) {
    //     const userRef = await createUserProfileDocument(userAuth);

    //     userRef.onSnapshot(snapShot => {
    //       setCurrentUser({
           
    //           id: snapShot.id,
    //           ...snapShot.data()
            
    //       })
    //     });
        
    //   } else {
    //     setCurrentUser(userAuth);
        
    //   }
      
    // });
    
  // };


  
    return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/shop' component={ShopPage}/>
        <Route exact path='/checkout' component={CheckoutPage}/>
        <Route exact path='/signin' render={() => 
          currentUser ? (
            <Redirect to='/' />
            ) : (
              <SignInAndSignUpPage />
              )
            } 
            />
      </Switch>
    </div>
    );
  }
  


const mapStateToProps =  createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
