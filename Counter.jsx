import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(){
        super();
        console.log("Component constructor called");
    };
    componentWillMount(){
        console.log("Component is about to mount");
    }
    componentWillUpdate(){
        console.log("Component is about to update");
    }
    componentDidUpdate(){
        console.log("Component is Updated");
    }
    componentDidMount(){
        console.log("Component is Mounted");
    }
    render() {
        console.log("Component Rendered");
        return (
            <div>
                <h1>Ankita Gupta</h1>
                <h1>Ankita</h1>
        
            </div>
        )
    }
}
