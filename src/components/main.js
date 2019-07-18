import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";

import List from './list';
import ItemEdit from './item-edit';

export default class NavBar extends Component {
  render() {
    return (
      <div className="main">
        <Switch>
          <Route path="/" exact component={List} />
          <Route path="/add" exact component={ItemEdit} />
        </Switch>
      </div>
    );
  }
}
