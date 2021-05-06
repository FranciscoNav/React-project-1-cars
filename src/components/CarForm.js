import React, { Component } from 'react'

class CarForm extends Component {
    state ={
        name:'',
        image:'',
        price:'',
        horsepower:'',
        year:'',
    }

    handleChange = (event) =>{
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addNewCar({
            name: this.state.name,
            image: this.state.image,
            price: parseInt(this.state.price),
            horsepower: this.state.horsepower,
            year: this.state.year,
        })
        alert(`${this.state.name} has been added to the master car list`)
    }

    render() {
        return (
            <div className="Car-form">
                <form className="add-new-car" onSubmit={this.handleSubmit}>
                    <h3>Add New Car</h3>
                    {/* <div></div> */}
                    <input type="text" name="name" placeholder="Enter a car's name" onChange={this.handleChange} />
                    <br/>
                    <input type="text" name="image" placeholder="Enter a car's image URL"  onChange={this.handleChange}/>
                    <br/>
                    <input type="text" name="price" placeholder="Enter a car's price"  onChange={this.handleChange}/>
                    <br/>
                    <input type="text" name="horsepower" placeholder="Enter the car's horsepower" onChange={this.handleChange}/>
                    <br/>
                    <input type="text" name="year" placeholder="Enter the car's production year" onChange={this.handleChange}/>
                    <br/>
                    <input type="submit" name="submit" value="Add New Car" className="submit"/>
                </form>
            </div>
        )
    }
}

export default CarForm
