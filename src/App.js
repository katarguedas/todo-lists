import React, { useEffect } from 'react';
import { useState } from 'react';

import Headline from './components/Headline';
import { v4 as uuidv4 } from 'uuid';

import Home from "./components/Home";
import List from './components/List';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";

import styled from 'styled-components';

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
  
  //..........................................................
  const saveTodolistsToLocalStorage = (todos) => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }

  const loadTodoListsFromLocalStorage = () => {
    if (JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) === null) {
      return listArrayInit
    } else {
      return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    }
  }

  //.......................................................  
  useEffect(() => {
    const lists = loadTodoListsFromLocalStorage()
      setTodos(lists)
  }, [])

  useEffect(() => {
    if (todos) {
      saveTodolistsToLocalStorage(todos)
    }
  }, [todos])
//..............................................................
  return (
    <StyledApp>

      <BrowserRouter>

      <StyledLink to="/"><Headline /></StyledLink>
        
        <Routes>
          <Route path="/" element={<Home todos={todos} setTodos={setTodos} />} />
          <Route path="/test" element={<div>404 not found</div>} />

          <Route path="/list/:id" element={ todos ? <List todos={todos} setTodos={setTodos} /> : null } />
        </Routes>
      </BrowserRouter>

    </StyledApp>
  );
}

export default App;

// styled component --------------------------------------------

const StyledApp = styled.div`
background-color: rgb(247, 242, 234);
text-align: center;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: rgb(96, 116, 189);
`

