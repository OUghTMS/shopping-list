import React, { Component } from 'react';

const MEASUREMENT_TYPES = {WEIGHT: 'weight', PIECES: 'pieces'};

export default class ItemEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            itemName: "",
            itemQuantity: "",
            measurementType: MEASUREMENT_TYPES.WEIGHT,
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
        this.setState({
            measurementType: event.target.value
        })
    }
    addNewItem() {
        if(this.state.itemName && this.state.itemQuantity) {
            this.setState({ showWarning: false});
            
            const a = {
                itemName: this.state.itemName,
                measurementType: this.state.measurementType,
                itemQuantity: this.state.itemQuantity,
                id: Math.floor(Math.random() * 10000) + 1 + "aaa"
            }
            const shoppingList = JSON.parse(localStorage.getItem('shoppingList'));

            shoppingList.need = [...shoppingList.need, a];

            localStorage.setItem('shoppingList', JSON.stringify(shoppingList));

            this.setState({ 
                itemName: "",
                itemQuantity: "" 
            });
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
                        Name: 
                        <input
                            className="input"
                            type="text" 
                            value={this.state.itemName}
                            name="itemName"
                            onChange={this.onItemValueChange}
                        />
                    </div>
                    <div className="put">
                            <input 
                                type="radio"
                                name="measurementType"
                                value="weight"
                                checked={this.state.measurementType === MEASUREMENT_TYPES.WEIGHT}
                                onChange={this.onItemMeasurementChange}
                            />weight
                            <input 
                                type="radio" 
                                name="measurementType"
                                value="pieces"
                                checked={this.state.measurementType === MEASUREMENT_TYPES.PIECES}
                                onChange={this.onItemMeasurementChange}
                            />pieces:
                            <input 
                                className="input"
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
