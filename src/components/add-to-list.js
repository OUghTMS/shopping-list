import React, { Component } from 'react';

export default class AddToList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            weightNumber: "",
            type: "weight",
            warn: false,
            done: false,
            added: "",
        }
        this.Change = this.Change.bind(this);
        this.checked = this.checked.bind(this);
        this.addNew = this.addNew.bind(this);
    }

    Change(event){
        this.setState({ [event.target.name]: event.target.value });
    }

    checked(event){
        this.setState({
            type: event.target.value
        })
    }
    addNew() {
        if(this.state.name !== "" && this.state.weightNumber !== "")
        {
            this.setState({ done: true});
            this.setState({ warn: false});
            this.setState({ added: this.state.name });
            
            const a = {
                name: this.state.name,
                type: this.state.type,
                weightNumber: this.state.weightNumber,
                id: Math.floor(Math.random() * 10000) + 1 + "aaa"
            }
            const shoppingList = JSON.parse(localStorage.getItem('shoppingList'));

            shoppingList.need = [...shoppingList.need, a];

            localStorage.setItem('shoppingList', JSON.stringify(shoppingList));
            
            //console.log(JSON.parse(localStorage.getItem('shoppingList')));

            this.setState({ name: "" });
            this.setState({ weightNumber: "" });
        }   
        else
        { 
            this.setState({ done: false});
            this.setState({ warn: true});
        }
    }
  render() {
    const warning = this.state.warn && 
                <div className="warning">Please check the entered!</div>
    const done = this.state.done && 
                <div className="done">{this.state.added} successfully added</div>
    
    return (
        <div className="">
            <h3>Enter information about the new task:</h3>
            <div className="add-to-list">
                <div>
                    <div className="put">
                        Name: 
                        <input
                            className="input"
                            type="text" 
                            value={this.state.name}
                            name="name"
                            onChange={this.Change}
                        />
                    </div>
                    <div className="put">
                            <input 
                                type="radio"
                                name="type"
                                value="weight"
                                checked={this.state.type === "weight"}
                                onChange={this.checked}
                            />weight
                            <input 
                                type="radio" 
                                name="type"
                                value="pieces"
                                checked={this.state.type === "pieces"}
                                onChange={this.checked}
                            />pieces:
                            <input 
                                className="input"
                                type="text" 
                                value={this.state.weightNumber}
                                name="weightNumber"
                                onChange={this.Change}
                            />
                    </div>
                </div>
            </div>
            <button className="add-button" onClick={this.addNew}>Add</button>
            {done}
            {warning}
            
        </div>
    );
  }
}
