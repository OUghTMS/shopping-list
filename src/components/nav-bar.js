import React, { Component } from 'react';
import {Link} from "react-router-dom";

export default class NavBar extends Component {
  render() {
    return (
        <div className="nav-bar">
          <Link to="/" className="left-button">Shopping List</Link>
          <Link to="/add" className="right-button">Add</Link>
        </div>
    );
  }
}
