import React, { Component } from 'react';

import NeedItem from './need-item'

export default class NeedList extends Component {
  render() {
    const item = this.props.need.map(list => {
      return <NeedItem 
              key={list.id} 
              list={list} 
              cancel={this.props.n} 
              complete={this.props.y}/>
      })
    return (
        <div>
          {item}
        </div>
    );
  }
}
