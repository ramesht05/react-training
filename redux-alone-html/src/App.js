import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { combineReducers, createStore } from "redux";

const userReducer = (state={}, action) => {
  switch(action.type) {
    case "SET_NAME": {
      return {...state, name: action.payload};
      break;
    }
    case "SET_AGE": {
      return {...state, age: action.payload};
      break;
    }
  }
  return state;
}

const tweetsReducer = (state=[], action) => {
  switch(action.type) {
    case "ADD_TWEET": {
      return state.concat({
        id: Date.now(), //fake an ID by using a timestamp
        text: action.payload,
      });
      break;
    }
  }
  return state;
}

const reducers = combineReducers({
  user: userReducer,
  tweets: tweetsReducer
})

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
