import React from 'react';
import { connect } from 'react-redux';
import { useState } from 'react';

function App() {
  const [newValue, setNewValue] = useState('Ednilson');

  return (
    <div className="App" style={{ paddingTop: '10px' }}>
      <h3>Olá, Ednilson!</h3>
      <input type='text' value={newValue} onChange={(e)=>(setNewValue(e.target.value))} />
        <button onClick={(e)=>(setNewValue(e.target.value))}>
          Click me!
        </button>
        <h1>{newValue}</h1>
    </div>
  );
}

const mapStateToProps = store => ({
  newValue: store.clickState.newValue  
});

export default connect(mapStateToProps)(App);
