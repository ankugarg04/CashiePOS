import React, { Component } from 'react'

export default class Cities extends Component {
    cities = ["Chd","Rtk"];
    render() {
        
        return (
            <div>
                <ul>
                    {this.cities.map((city) =>(
                    <li>{city}</li>))}
                </ul>
            </div>
        )
    }
}
