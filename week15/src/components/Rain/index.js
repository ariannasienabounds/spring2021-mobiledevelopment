import React from 'react';

function Rain (props) {

    return (
        <div>
            <h2>Rainy Days: {props.state.rain}</h2>
            <button onClick={() => props.dispatch({"type": "increment2"})}>Add Rainy Day</button>
            <button onClick={() => props.dispatch({"type": "decrement2"})}>Remove Rainy Day</button>
        </div>
    )
}

export default Rain;