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
    let arr = [...this.state.need];
    for(let i=0; i<arr.length; i++)
      if(id === arr[i].id) arr.splice(i, 1);
    localStorage.setItem('shoppingList', JSON.stringify(
        {need: arr,
        completed: [...this.state.completed]}
      ));
    this.setState({
      need: arr
    })
  }

  complete(id) {
    let arr = [...this.state.need];
    let a;
    for(let i=0; i<arr.length; i++)
      if(id === arr[i].id) a=arr.splice(i, 1);
    localStorage.setItem('shoppingList', JSON.stringify(
        {need: arr,
        completed: [...this.state.completed, ...a]}
      ));
    this.setState({
      need: arr,
      completed: [...this.state.completed, ...a]
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


