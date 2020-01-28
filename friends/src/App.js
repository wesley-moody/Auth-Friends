import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import "./App.css";

import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import FriendsList from './components/FriendsList';

function App() {
  return (
    <Router>
    <div className='App'>
      <nav>
        <Link to='/login'>Login ||</Link>
        <Link to='/protected'>Premium Content</Link>
      </nav>
      <Switch>
        <PrivateRoute exact path='/protected' component={FriendsList} />
        <Route path='/login' component={Login} />
        <Route component={Login} />
      </Switch>
    </div>  
    </Router>
  );
}

export default App;
