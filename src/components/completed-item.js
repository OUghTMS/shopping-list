import React, { Component } from 'react';

export default class CompletedItem extends Component {
  render() {
    const {itemName, measurementType, itemQuantity} = this.props.item;
    return (
        <div className="item-head">
            <div className="item-short-descr">
                <div className="item-name">{itemName}</div>
                <div className="item-type">{measurementType}:</div>
                <div className="item-weight-number">{itemQuantity}</div>
            </div>
            <button className="arrow">🢓</button>
        </div>
    );
  }
}