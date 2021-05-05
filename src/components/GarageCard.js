import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class GarageCard extends Component {
  handleClick=()=>{
    this.props.deleteCar(this.props.car)
  }
  
  render() {
    return (
      <div className="card">
        <h2>{this.props.car.name}</h2>
        <img src={this.props.car.image} alt={this.props.car.name} className="car-picture" />
        <p>Price ${this.props.car.price}</p>
        <p>Horsepower {this.props.car.horsepower}</p>
        <Link to={`/garage/${this.props.car.id}`}>More Details</Link>
        <button className="remove-btn" onClick={this.handleClick}>Remove from Garage</button>
      </div>
    );
  }
}

export default GarageCard;