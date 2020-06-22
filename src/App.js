import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/header/header.component.jsx'
import HomePage from './pages/homepage/homepage.component.jsx';
import ShopPage from './pages/shoppage/shop.component.jsx';

import './App.css';






function App() {
  return (
    <div>
      <Header></Header>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/shop' component={ShopPage}/>
    
      </Switch>
    </div>
  );
}

export default App;
