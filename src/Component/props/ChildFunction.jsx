import React from 'react'

function ChildFunction(props) {
    return (
        <div>
            <h2>Child Function</h2>
            <p>Say: {props.theHero.say} </p>
        </div>
    )
}

export default ChildFunction
