let state = {
    sun: 0,
    rain: 0
};

function reducer(state, action) {
    switch (action.type) {
        case 'increment1':
            return {sun: state.sun + 1, rain: state.rain};
        case 'increment1':
            return {sun: state.sun, rain: state.rain + 1};
        case 'decrement1':
            return {sun: state.sun - 1, rain: state.rain};
        case 'decrement2':
            return {sun: state.sun, rain: state.rain - 1};
        default: 
            throw new Error();
    }
};

export {state, reducer};