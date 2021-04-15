import React, { Component } from 'react'

export class Child extends Component {

        
    render() {
        return (
            <div>
                <h3>Child</h3>
                <p>Name: {this.props.theHero.hero} </p>
                <p>Say: {this.props.theHero.say} </p>
                {this.props.children}
            </div> 
        )
    }
}

export default Child
