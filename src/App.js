import React from 'react';
import { useState } from 'react';

import './App.css';
import Headline from './components/Headline';
import List from './components/List';
import { v4 as uuidv4 } from 'uuid';


// Variablen --------------
const listArray = [
  {
    id: uuidv4(),
    title: "Heute",
    tasks: [
      {
      idi: uuidv4(),
      text: "Einkaufen",
      done: false
    },
    {
      idi: uuidv4(),
      text: "Kochen",
      done: false
    }]
    },
  {
    id: uuidv4(),
    title: "Morgen",
    tasks: [
      {
      idi: uuidv4(),
      text: "Fenster putzen",
      done: false
      },
      {
        idi: uuidv4(),
        text: "Coden",
        done: false
      }
    ]
  },
  {
    id: uuidv4(),
    title: "Demnächst",
    tasks: [
      {
      idi: uuidv4(),
      text: "Steuererklärung",
      done: false
    },
    {
      idi: uuidv4(),
      text: "Geschenk kaufen",
      done: false
    }
  ]
  }
]
console.log(typeof listArray)

//--------------------------------------------------------------------

function App() {

  const [todos, setTodos] = useState(listArray); 

  console.log(typeof todos)

  return (
    <div className="App">

      <Headline />

      <div className="listGroup">
        {
          todos.map(e => (
          <List head={e.title} key={e.id} listId={e.id} list={e} items={e.tasks} todos={todos} setTodos={setTodos} />
          ))
        }
      </div>
    </div>
  );
}

export default App;
