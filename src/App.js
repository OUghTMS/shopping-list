import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";

import './App.css';

import NavBar from './components/nav-bar';
import Header from './components/header';
import Main from './components/main';

export default class App extends Component {
  constructor(props){
    super(props);
    //localStorage.clear();
    if(localStorage.length === 0){
      const start = {need: [], completed: []};
      localStorage.setItem('shoppingList', JSON.stringify(start));
    }
    console.log(JSON.parse(localStorage.getItem('shoppingList')));
  }
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div className="App">
          <Header />
          <NavBar />
          <Main />
        </div>
      </Router>
    );
  }
}
