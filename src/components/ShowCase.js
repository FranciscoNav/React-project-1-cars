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
                I am a car ShowCase!! 
                <p>{this.state.car.name}</p>
            </div>
        )
    }
}
export default ShowCase
