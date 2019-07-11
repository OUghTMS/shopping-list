import React, { Component } from 'react';

import CompletedItem from './completed-item'

export default class NeedList extends Component {
  render() {
    const item = this.props.completed.map(list => { 
      return <CompletedItem 
                key={list.id}
                item={list}/>
        })
    return (
        <div>
            {item}
        </div>
    );
  }
}
