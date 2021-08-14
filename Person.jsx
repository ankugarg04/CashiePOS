import React, { Component } from 'react'

export default class Person extends Component {
    data = {id:1, name:"Ankita", location:"Rohtak"};
    render() {
        return (
            <div>
                <h1> I am a Person class.</h1>
                <h2>Name {this.data.name}</h2>
            </div>
        )
    }
}
