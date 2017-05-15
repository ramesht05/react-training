import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { combineReducers, createStore } from "redux";
import { userReducer } from "./reducers/user-reducer";
import { tweetsReducer } from "./reducers/tweets-reducer";

const reducers = combineReducers({
  user: userReducer,
  tweets: tweetsReducer
});

const store = createStore(reducers);

store.subscribe(() => {
  console.log("store changed", store.getState());
})

class App extends Component {
  render() {
    store.dispatch({type: "SET_NAME", payload: "Will"})
    store.dispatch({type: "SET_AGE", payload: 35})
    store.dispatch({type: "SET_AGE", payload: 34})
    store.dispatch({type: "ADD_TWEET", payload: "OMG LIKE LOL"})
    store.dispatch({type: "ADD_TWEET", payload: "right now"})
    
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;