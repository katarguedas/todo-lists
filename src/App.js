import React, { useEffect } from 'react';
import { useState } from 'react';

import './App.css';
import Headline from './components/Headline';
import List from './components/List';
import { v4 as uuidv4 } from 'uuid';


// Variablen --------------

const LOCAL_STORAGE_KEY = "local_storage_lists"

const listArrayInit = [
  {
    id: uuidv4(),
    title: "Heute",
    tasks: []
  },
  {
    id: uuidv4(),
    title: "Morgen",
    tasks: []
  },
  {
    id: uuidv4(),
    title: "Demnächst",
    tasks: []
  }
]

//--------------------------------------------------------------------

function App() {

  const [todos, setTodos] = useState();

  console.log("todos", todos);

  const lists = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
  console.log("lists:", lists)

  useEffect(() => {
    if (lists === null) {
      setTodos(listArrayInit)
      console.log("todos init", todos);
    } else {
      setTodos(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)))
    }
  }, [])

  useEffect(() => {
    if (todos) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
    }
  }, [todos])



  return (
    <div className="App">

      <Headline />

      <div className="listGroup">
        {
          todos ?
            todos.map(e => (
              <List head={e.title} key={e.id} listId={e.id} list={e} items={e.tasks} todos={todos} setTodos={setTodos} />
            ))
            : null
        }
      </div>
    </div>
  );
}

export default App;
