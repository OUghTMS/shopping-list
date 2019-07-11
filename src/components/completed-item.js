import React, { Component } from 'react';

export default class CompletedItem extends Component {
  render() {
    const item = this.props.item;
    return (
        <div className="item-head">
            <div className="item-short-descr">
                <div className="item-name">{item.itemName}</div>
                <div className="item-type">{item.measurementType}:</div>
                <div className="item-weight-number">{item.itemQuantity}</div>
            </div>
            <button className="arrow">🢓</button>
        </div>
    );
  }
}