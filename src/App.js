import React, {useState} from 'react';
import './App.css';
import Class from './Class'
import Hooks from './Hooks'

function App() {
  const [number, setNumber] = useState(22)

  const biggify = () => {
    setNumber(number+14)
  }

  return (
    <div className="App">
      <Class number={number} biggify={biggify} />
      <Hooks number={number} biggify={biggify} />

    </div>
  );
}

export default App;
