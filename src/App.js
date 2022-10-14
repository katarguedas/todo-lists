import React from 'react';
import useLists from './hooks/useTodos';
import Headline from './components/Headline';
import Home from "./components/Home";
import List from './components/List';

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components'

//--------------------------------------------------------------------

function App() {

  const [todos, setTodos, toggleTodo, deleteTodo, addTodo, moveAndDelete] = useLists();


  //.............
  return (

    <React.Fragment>
      <GlobalStyle />
      <StyledApp>

        <BrowserRouter>

          <StyledLink to="/"><Headline /></StyledLink>

          <Routes>
            <Route path="/" element={<Home todos={todos} setTodos={setTodos} toggleTodo={toggleTodo} addTodo={addTodo} deleteTodo={deleteTodo} moveAndDelete={moveAndDelete} />} />
            <Route path="/test" element={<div>404 not found</div>} />

            <Route path="/list/:id" element={todos ? <List 
            todos={todos} 
            setTodos={setTodos} 
            toggleTodo={toggleTodo} deleteTodo={deleteTodo} addTodo={addTodo} moveAndDelete={moveAndDelete} /> : null} />
          </Routes>
        </BrowserRouter>

      </StyledApp>

    </React.Fragment>

  );
}

export default App;


// -----------styled component --------------------------------------------

const StyledApp = styled.div`
background-color: rgb(247, 242, 234);
text-align: center;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: rgb(96, 116, 189);
`

const GlobalStyle = createGlobalStyle`
  body {
    background-color: rgb(247, 242, 234);
  }
`