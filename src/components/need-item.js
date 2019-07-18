import React, { Component } from 'react';

export default class NeedItem extends Component {
  render() {
    const { itemName, measurementType, itemQuantity, id } = this.props.item;
    return (
      <div className="item">
        <div className="item-head">
          <div className="item-short-descr">
            <div className="item-name">{itemName}</div>
            <div className="item-type">{measurementType}:</div>
            <div className="item-weight-number">{itemQuantity}</div>
          </div>
        </div>
        <div className="item-description">
          <div className="item-buttons">
            <button className="cancel" onClick={() => this.props.cancel(id)}>Сancel</button>
            <button className="complete" onClick={() => this.props.complete(id)}>Complete</button>
          </div>
        </div>
      </div>
    );
  }
}