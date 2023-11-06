// Composant parent.

import {useState} from 'react'

import './App.scss'
import Die from './components/Die'

function App() {

  const [value, setValue] = useState(0);

  const handleRoll = (newValue: number) => {
    /*if(newValue > 3){*/
      setValue(newValue);
    /*}*/
  };

  return (
    <>
      <Die onRoll={handleRoll} />
      <p>Nouvelle valeur : {value}</p>
    </>
  )
}

export default App
