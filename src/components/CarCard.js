import React, { Component } from 'react';

class CarCard extends Component {

  handleClick=()=>{
    alert(`${this.props.car.name} has been added to the YOUR dream garage`)
    this.props.addToGarage(this.props.car)
  }

  handleRemove=()=>{
    this.props.deleteCar(this.props.car)
  }

  render() {
    return (
      <div className="card">
        <h2>{this.props.car.name}</h2>
        <img src={this.props.car.image} alt={this.props.car.name} className="car-picture" />
        <p>Price ${this.props.car.price}</p>
        <button className="remove-btn" onClick={this.handleRemove}>Remove Car from List :(</button>
        <button className="add-btn" onClick={this.handleClick}>Add to Your Garage!</button>
      </div>
    );
  }
}

export default CarCard;
