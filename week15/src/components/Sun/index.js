import React from 'react';

function Sun (props) {

    return (
        <div>
            <h2>Sunny Days: {props.state.sun}</h2>
            <button onClick={() => props.dispatch({"type": "increment1"})}>Add Sunny Day</button>
            <button onClick={() => props.dispatch({"type": "decrement1"})}>Remove Sunny Day</button>
        </div>
    )
}

export default Sun;