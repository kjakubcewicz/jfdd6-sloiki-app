import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import {Provider} from 'react-redux'
import store from './store'


import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import 'react-input-range/lib/css/index.css'

import App from './components/app/app'
import MainView from './components/main-view'
import LoginView from './components/login-view'
import RegistrationView from './components/registration-view/registration-view'
import GamesListView from './components/games-list-view/games-list-view'
import GameProfileView from './components/game-card-view/game-card-view'

import UsersListView from './components/users-list-view/users-list-view'
import UserProfileView from './components/user-profile-view/user-profile-view'


ReactDOM.render(
  (
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={MainView}/>
          <Route path="/games-list" component={GamesListView}/>
          <Route path="/game-profile/:gameId" component={GameProfileView}/>
          <Route path="/users-list" component={UsersListView}/>
          <Route path="/user-profile/:userId" component={UserProfileView}/>
          <Route path="/login" component={LoginView}/>
          <Route path="/registration" component={RegistrationView}/>
{/*          <Route path="/map" component={MapView}/>*/}
        </Route>
      </Router>
    </Provider>
  ),
  document.getElementById('root')
);