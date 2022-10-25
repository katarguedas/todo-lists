//Components

import Headline from './components/Headline';
import Home from "./components/Home";
import List from './components/List';
import Postlist from './components/Postlist';
import { TodoAppContextProvider } from './providers/TodoAppContext';
import PostHeadline from './components/PostHeadline';
import GlobalStyles from "./styled/GlobalStyles";
import { darkTheme, lightTheme } from './styled/Themes';
import { StyledLink } from './styled/GlobalStyles';

// External Components
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import { MdDarkMode, MdOutlineWbSunny } from "react-icons/md";


//--------------------------------------------------------------------

function App() {

  const [theme, setTheme] = useState('light');

  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  //.............
  return (
    <TodoAppContextProvider>

      <React.Fragment>
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme} >
          <GlobalStyles />
          <StyledApp>
            <BrowserRouter>
              <StyledLink to="/"><Headline /></StyledLink>
              <StyledMdDarkMode onClick={themeToggler} mode={theme} />
              <StyledMdOutlineWbSunny onClick={themeToggler} mode={theme} />

              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/test" element={<div>404 not found</div>} />
                <Route path="/list/:id" element={<List />} />
                <Route to="/posts" element={<Postlist />} />
              </Routes>
              <StyledLink to="/posts"><PostHeadline /></StyledLink>
              <Postlist />
            </BrowserRouter>
          </StyledApp>
        </ThemeProvider>
      </React.Fragment>
    </TodoAppContextProvider>
  );
}

export default App;


// -----------styled components --------------------------------------------

const StyledApp = styled.div`
text-align: center;
`

const StyledMdDarkMode = styled(MdDarkMode)`
  display: ${props => props.mode === 'light' ? 'block' : 'none'};
  position: absolute;
  top: 2.5rem;
  right: 4.0rem;
  padding: 3px;
  border: 1px solid #ef476f;
  border-radius: 3px;
  font-size: 2.0rem;
  :active {
    transform: translateY(2px);
  }
`
const StyledMdOutlineWbSunny = styled(MdOutlineWbSunny)`
  display: ${props => props.mode === 'light' ? 'none' : "block"};
  position: absolute;
  color: #ffd166;
  top: 2.5rem;
  right: 4.0rem;
  padding: 3px;
  border: 1px solid #ef476f;
  border-radius: 3px;
  font-size: 2.0rem;
  :active {
    transform: translateY(2px);
  }
`