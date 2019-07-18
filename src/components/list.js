import React, { Component } from 'react';

import NeedList from './need-list';
import CompletedList from './completed-list';

export default class List extends Component {
  constructor(){
    super();

    this.state= {
      need: [],
      completed: []
    }

    this.complete = this.complete.bind(this);
    this.cancel = this.cancel.bind(this);
  }

  componentDidMount(){
    if(localStorage.length === 0){
      const start = {need: [], completed: []};
      localStorage.setItem('shoppingList', JSON.stringify(start));
    }
    const {need, completed} = JSON.parse(localStorage.getItem('shoppingList'));
    this.setState({
      need: need,
      completed: completed,
    });
  }

  cancel(id) {
    const newNeedList = this.state.need.filter(item => id !== item.id);
    localStorage.setItem('shoppingList', JSON.stringify(
        {need: newNeedList,
        completed: [...this.state.completed]}
      ));
    this.setState({
      need: newNeedList
    })
  }

  complete(id) {
    const newNeedList = this.state.need.filter(item => id !== item.id);
    const newCompletedList = this.state.need.filter(item => id === item.id);
    localStorage.setItem('shoppingList', JSON.stringify({
      need: newNeedList,
      completed: [...this.state.completed, ...newCompletedList]
    }));
    this.setState({
      need: newNeedList,
      completed: [...this.state.completed, ...newCompletedList]
    })
  }
  render() {
    return (
        <div>
          <h3>Need:</h3>
          <div>
            <NeedList need={this.state.need} complete={this.complete} cancel={this.cancel}/>
          </div>
          <h3>Completed:</h3>
          <div>
            <CompletedList completed={this.state.completed}/>
          </div>
        </div>
    );
  }
}


