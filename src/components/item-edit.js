import React, { Component } from 'react';

import MeasurementType from './measurement-type'

const MEASUREMENT_TYPES = {KILOGRAMS: 'Kilograms', PIECES: 'Pieces', LITERS: 'Liters' };

export default class ItemEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            itemName: "",
            itemQuantity: "",
            measurementType: MEASUREMENT_TYPES.PIECES,
            showWarning: false
        }
        this.onItemValueChange = this.onItemValueChange.bind(this);
        this.onItemMeasurementChange = this.onItemMeasurementChange.bind(this);
        this.addNewItem = this.addNewItem.bind(this);
    }

    onItemValueChange(event){
        this.setState({ [event.target.name]: event.target.value });
    }

    onItemMeasurementChange(event){
        this.setState({measurementType: event.target.value});
        console.log(this.state.measurementType);
    }

    addNewItem() {
        if(this.state.itemName && this.state.itemQuantity) {
            const a = {
                itemName: this.state.itemName,
                measurementType: this.state.measurementType,
                itemQuantity: this.state.itemQuantity,
                id: Date.now()
            }
            const shoppingList = JSON.parse(localStorage.getItem('shoppingList'));

            shoppingList.need = [...shoppingList.need, a];

            localStorage.setItem('shoppingList', JSON.stringify(shoppingList));

            this.setState({ 
                itemName: "",
                itemQuantity: "", 
                showWarning: false
            });

            window.location.replace("/");
        }   
        else {
            this.setState({ showWarning: true});
        }
    }
  render() {
    const warning = this.state.showWarning && 
                <div className="warning">Please check the entered!</div>
    return (
        <div>
            <h3>Please, provide new item information:</h3>
            <div className="add-to-list">
                <div>
                    <div className="put">
                        <input
                            placeholder="Name"
                            className="input focus-bg"
                            type="text" 
                            value={this.state.itemName}
                            name="itemName"
                            onChange={this.onItemValueChange}
                        />
                    </div>
                    <div className="put">
                        <MeasurementType measurementType={this.state.measurementType} onItemMeasurementChange={this.onItemMeasurementChange}/>
                        <input 
                            placeholder={this.state.measurementType}
                            className="input focus-bg"
                            type="text" 
                            value={this.state.itemQuantity}
                            name="itemQuantity"
                            onChange={this.onItemValueChange}
                        />
                    </div>
                </div>
            </div>
            <button className="add-button" onClick={this.addNewItem}>Add</button>
            {warning}
        </div>
    );
  }
}
