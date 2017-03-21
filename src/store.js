import {createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import persistState from 'redux-localstorage'

import gamesReducer from './state/games'
import usersReducer from './state/users'
import searchReducer from './state/search'
import rangeReducer from './state/range'
import favsReducer from './state/favs'
import sessionReducer from './state/session'
import userReducer from './state/user'
import mapsReducer from './state/maps'


const reducer = combineReducers({
  games: gamesReducer,
  users: usersReducer,
  search: searchReducer,
  range: rangeReducer,
  favs: favsReducer,
  session: sessionReducer,
  user: userReducer,
  maps: mapsReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  composeEnhancers(
    persistState(['session']),
    applyMiddleware(thunk)
  )
);

export default store