import React, { Component } from 'react'
import GarageCard from './GarageCard'

class MyGarage extends Component {
    state = {
        myGarage:[]
    }
    
    componentDidMount(){
        fetch('http://localhost:3001/garage')
        .then(response => response.json())
        .then(data => 
            this.setState({
            myGarage: data 
        }))
    }

    deleteCarInGarage = (car) => {
        fetch(`http://localhost:3001/garage/${car.id}`,{
          method: "DELETE",
          headers:{
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body:JSON.stringify(car)
        })
        .then(resp => resp.json())
        .then(data =>{
          let carIndex = this.state.myGarage.indexOf(car)
          this.state.myGarage.splice(carIndex, 1)
          this.setState({
            myGarage:[...this.state.myGarage]
          })
        })
      }

      calculateNetValue = () => {
        const price = this.state.myGarage.map(e => e.price)
        price.reduce((accumulator, currentValue) => accumulator+ currentValue)
        console.log('Price', price.reduce((accumulator, currentValue) => accumulator+ currentValue))
      }

    render() {
        const renderGarageCards = this.state.myGarage.map(carE => <GarageCard car={carE} deleteCar={this.deleteCarInGarage}/>)
        
        return (
            <div>
                <h1>My Garage</h1>
                {renderGarageCards}
                <br/>
                <hr/>
                <p>Garage Value = ${this.calculateNetValue} </p>
                <button className="remove-btn" onClick={this.calculateNetValue}>Calculate net value</button>
            </div>
        )
    }
}

export default MyGarage 
