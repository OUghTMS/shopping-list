import React, { Component } from 'react';

export default class NeedItem extends Component {
  render() {
    const item = this.props.list;
    return (
      <div className="item">
        <div className="item-head">
          <div className="item-short-descr">
              <div className="item-name">{item.itemName}</div>
              <div className="item-type">{item.measurementType}:</div>
              <div className="item-weight-number">{item.itemQuantity}</div>
          </div>
          <button className="arrow">🢓</button>
        </div>
        <div className="item-description">
          <div className="item-buttons">
            <button className="cancel" onClick={() => this.props.cancel(item.id)}>Сancel</button>
            <button className="complete" onClick={() => this.props.complete(item.id)}>Complete</button>
          </div>
        </div>
      </div>
    );
  }
}