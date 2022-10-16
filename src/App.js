//Components

import Headline from './components/Headline';
import Home from "./components/Home";
import List from './components/List';
import { TodoAppContextProvider } from './providers/TodoAppContext';

// External Components
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components'

//--------------------------------------------------------------------

function App() {

  //.............
  return (
    <TodoAppContextProvider>

      <React.Fragment>
        <GlobalStyle />
        <StyledApp>

          <BrowserRouter>
            <StyledLink to="/"><Headline /></StyledLink>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/test" element={<div>404 not found</div>} />
              <Route path="/list/:id" element={<List /> }/>
            </Routes>
          </BrowserRouter>

        </StyledApp>

      </React.Fragment>

    </TodoAppContextProvider>

  );
}

export default App;


// -----------styled components --------------------------------------------

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