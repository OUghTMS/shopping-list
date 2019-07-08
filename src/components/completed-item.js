import React, { Component } from 'react';

export default class CompletedItem extends Component {
  render() {
    const item = this.props.item;
    return (
        <div className="item-head">
            <div className="item-short-descr">
                <div className="item-name">{item.name}</div>
                <div className="item-type">{item.type}:</div>
                <div className="item-weight-number">{item.weightNumber}</div>
            </div>
            <button className="arrow">🢓</button>
        </div>
    );
  }
}