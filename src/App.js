import './App.css';
import React, { useState } from 'react';

function App() {
  const [visible, setVisible] = React.useState(1);
  return (
    <div className="App">
      <button onClick={() => setVisible(!visible)}> Toggle </button>
      
      {visible ? <p> Hello, world! </p> : ''}
    </div>
  );
}

export default App;
