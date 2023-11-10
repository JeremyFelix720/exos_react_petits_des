// Composant parent.

import {useState} from 'react'

import './App.scss'
import Die from './components/Die'

function App() {

  const diceValues = [];

  const [value, setValue] = useState(0);

  const handleRoll = (newValue: number) => {
    /*if(newValue > 3){*/
      setValue(newValue);
    /*}*/
  };

  // "handleRoll" est un outil que le parent "App" fourni à l'enfant "Die" pour que ce dernier s'en serve quand c'est nécessaire (ex. : au changement de la valeur du dé). Ici, "handleRoll" (dans le parent) permet de prendre en compte la nouvelle valeur remontée à "App" par le moyen de la propriété "onRoll" (dans l'enfant).
  return (
    <>
    <div id="app">
      <div>
        <Die onRoll={handleRoll} /> 
        <p>Nouvelle valeur : {value}</p>
      </div>
      <div>
        <Die onRoll={handleRoll} />
        <p>Nouvelle valeur : {value}</p>
      </div>
      <div>
        <Die onRoll={handleRoll} />
        <p>Nouvelle valeur : {value}</p>
      </div>
    </div>
    </>
  )
}

export default App
