import React, { Component } from 'react'
import CarCard from './CarCard'
import CarForm from './CarForm'
  
export default class CarsList extends Component {
    state = {
        allCars: [],
    }

  componentDidMount(){
    fetch('http://localhost:3001/cars')
    .then(response => response.json())
    .then(data => 
      this.setState({
      allCars: data
    }))
  }

  addNewCar = (car) =>{
    fetch('http://localhost:3001/cars',{
      method: "POST",
      headers:{
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body:JSON.stringify(car)
    })
    .then(resp => resp.json())
    .then(data =>{
      this.setState({
        allCars:[...this.state.allCars, data]
      })
    })
  }

  addToGarage=(car)=>{
    fetch('http://localhost:3001/garage',{
      method: "POST",
      headers:{
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body:JSON.stringify(car)
    })
    .then(resp => resp.json())
    .then(data => console.log('posted',data))
  }

  deleteCar = (car) => {
    fetch(`http://localhost:3001/cars/${car.id}`,{
      method: "DELETE",
      headers:{
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body:JSON.stringify(car)
    })
    .then(resp => resp.json())
    .then(data =>{
      let carIndex = this.state.allCars.indexOf(car)
      this.state.allCars.splice(carIndex, 1)
      console.log(carIndex)
      this.setState({
        allCars:[...this.state.allCars]
      })
    })
  }

    render() {
        const renderCars= this.state.allCars.map(carE => <CarCard car={carE} addToGarage={this.addToGarage} deleteCar={this.deleteCar}/>)

        return (
            <div id="car-list">
                <CarForm addNewCar={this.addNewCar}/>
                {renderCars}
            </div>
        )
    }
}
