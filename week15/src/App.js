import React, {useReducer} from 'react';
import {state, reducer} from './components/ApplicationState';
import Rain from './components/Rain';
import Sun from './components/Sun';

function App() {

  const [currentState, dispatch] = useReducer(reducer, state);

  return (
    <div className="App">
      <header className="App-header">
        <Rain state={currentState} dispatch={dispatch}/>
        <Sun state={currentState} dispatch={dispatch}/>
      </header>
    </div>
  )
}

export default App;