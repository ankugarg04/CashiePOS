import React, { Component } from 'react'

export default class Counter1 extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <h1>Name: {this.props.name}</h1>
                <h1>Age: {this.props.age}</h1>
                <h1>Email: {this.props.email}</h1>

            </div>
        )
    }
}
