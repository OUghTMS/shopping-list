import React, { Component } from 'react';

import NeedItem from './need-item'

export default class NeedList extends Component {
  render() {
    const item = this.props.need.map(item => {
      return <NeedItem 
              key={item.id} 
              item={item} 
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
