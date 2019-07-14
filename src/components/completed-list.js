import React, { Component } from 'react';

import CompletedItem from './completed-item'

export default class NeedList extends Component {
  render() {
    const item = this.props.completed.map(item => { 
      return <CompletedItem 
                key={item.id}
                item={item}/>
        })
    return (
        <div>
            {item}
        </div>
    );
  }
}
