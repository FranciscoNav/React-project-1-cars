import React, { Component } from 'react'
import GarageCard from './GarageCard'

class MyGarage extends Component {
    state = {
        myGarage:[],
        netValue: 0
    }
    
    componentDidMount(){
        fetch('http://localhost:3001/garage')
        .then(response => response.json())
        .then(data => {
          this.setState({
            myGarage: data 
          })
          this.calculateNetValue()
      })
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
          this.calculateNetValue()
        })
      }

      calculateNetValue = () => {
        const stateLength = this.state.myGarage.length
        if (stateLength === 0){
          return 0
        }else{
          const price = this.state.myGarage.map(e => e.price)
          const adder = price.reduce((accumulator, currentValue) => accumulator+ currentValue)
          this.setState({
            netValue: adder
          })
        }
      }

    render() {
        const renderGarageCards = this.state.myGarage.map(carE => <GarageCard car={carE} deleteCar={this.deleteCarInGarage}/>)
        
        return (
            <div id="page-list">
                <h1>Welcome to YOUR Dream Garage</h1>
                <p>Click “More Details”, if you would like to see more information about any of the cars you selected. If you changed your mind about a car, you can remove it from the garage by clicking on the “Remove from Garage” button.</p>
                {renderGarageCards}
                <br/>
                <hr/>
                <p>Garage Net Value = ${this.state.netValue}</p>
            </div>
        )
    }
}

export default MyGarage 
