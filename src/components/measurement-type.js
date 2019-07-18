import React, { Component } from 'react';

const MEASUREMENT_TYPES = {KILOGRAMS: 'Kilograms', PIECES: 'Pieces', LITERS: 'Liters' };

export default class MeasurementType extends Component {
    render() {
        return (
            <select className="input" value={this.props.measurementType} onChange={this.props.onItemMeasurementChange}>
                <option value={MEASUREMENT_TYPES.PIECES}>Pieces</option>
                <option value={MEASUREMENT_TYPES.KILOGRAMS}>Kilograms</option>
                <option value={MEASUREMENT_TYPES.LITERS}>Liters</option>
            </select>
        )
    }
}