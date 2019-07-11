import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";

import './App.css';

import NavBar from './components/nav-bar';
import Header from './components/header';
import Main from './components/main';

export default class App extends Component {
  componentDidMount() {
    if(localStorage.length === 0){
      const start = {need: [], completed: []};
      localStorage.setItem('shoppingList', JSON.stringify(start));
    }
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
