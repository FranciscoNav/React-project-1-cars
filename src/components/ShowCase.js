import React, { Component } from 'react'

class ShowCase extends Component {
    state = {
        car:[]
    }
    
    componentDidMount(){
        fetch(`http://localhost:3001/cars/${this.props.match.params.id}`)
        .then(response => response.json())
        .then(data => 
            this.setState({
                car: data
        }))
    }

    render() {
        return (
            <div>
                <h1>The {this.state.car.name}!</h1>
                <img src={this.state.car.image} alt={this.state.car.name} className="showcase-pic" />
                <ul className="car-details"> Below are all the details regarding your {this.state.car.name} 
                    <li>Base Price: ${this.state.car.price}</li>
                    <li>Horsepower: {this.state.car.horsepower}</li>
                    <li>Production Year: {this.state.car.year}</li>
                    <li>Garage ID: {this.state.car.id}</li>
                </ul>
            </div>
        )
    }
}
export default ShowCase
