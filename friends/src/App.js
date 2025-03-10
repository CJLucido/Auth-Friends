import React from 'react';
import './App.css';
import {Switch, Route, Link} from 'react-router-dom'

import {fetchFriends} from "./actions"

import {connect} from 'react-redux'

///////////PAGES///////////////////////
import Login from './components/Pages/Login'
///////////ORGANISMS/////////////////////
import PrivateRoute from "./components/Organisms/PrivateRoute"
import FriendsList from './components/Pages/FriendsList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>

          <li>
            <Link to='/friends'>Friends</Link>
          </li>
        </ul>

        <Switch>
        <PrivateRoute path="/friends">
          <FriendsList/>
        </PrivateRoute>
          <Route path="/login" component={Login}/>
          <Route component={Login}/>
        </Switch>
      </header>
    </div>
  );
}

const mapDispatchToProps = {
  fetchFriends
}

export default connect(state => state, mapDispatchToProps)(App) ;
