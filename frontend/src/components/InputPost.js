import { useTodoAppContext } from "../providers/TodoAppContext"

import React, { useRef, useState } from 'react'
import { IoAddOutline } from "react-icons/io5";
import styled from "styled-components";
import Button from '@mui/material/Button';


//-----------------------------------------------------

const InputPost = () => {

  const [inputpost, setInputpost] = useState(false);
  const postTitleRef = useRef()
  const postTextRef = useRef()

  const { addPost } = useTodoAppContext();
  //............................
  const newPostInput = () => {
    setInputpost(!inputpost);
  }

  const newPostItem = () => {
    if ((postTitleRef !== "") && (postTitleRef.current.value.trim() !== "")) {
      if ((postTextRef !== "") && (postTextRef.current.value.trim() !== ""))
        addPost(postTitleRef.current.value, postTextRef.current.value)
    }
    postTitleRef.current.value = "";
    postTextRef.current.value = "";
    newPostInput()
  }
  //............................
  const handleInputClick = () => {
    setInterval(newPostInput(), 2500);
  }
  const handleSendClick = () => {
    newPostItem();
  }


  //------------------------------------------------------------------
  return (
    <div>
    <StyledNewPost onClick={handleInputClick} />
    <StyledInputPostGroup>
      
      {
        inputpost === true ?
          <div>
            <div><StyledLabel htmlFor="title">Stichwort</StyledLabel></div>
            <div>
              <StyledInputPost ref={postTitleRef} autoComplete="off" type="text" id="title" />
            </div>
            <div> <StyledLabel htmlFor="note">Notiz </StyledLabel></div>
            <div>
              <StyledInputPostText ref={postTextRef} autoComplete="off" type="text" id="note" /></div>
            <Button
              variant="text"
              onClick={handleSendClick} >
              Senden
            </Button>
          </div>
          : null
      }
    </StyledInputPostGroup>
    </div>
  )
}

export default InputPost;

//----------- styled component ----------------------------------------------------

const StyledInputPostGroup = styled.div`
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 6px;
  margin-top: 15px;
  width: 20rem;;
  background-color: #ffd166;

`
const StyledNewPost = styled(IoAddOutline)`
  margin: 1.0rem;
  padding: 0.1rem;
  font-size: 2.5rem;
  color: #fff;
  background-color: #06d6a0;
  border-radius: 0.75em;
  :active {
    transform: translateY(2px);
  }
`

const StyledInputPost = styled.input`
  margin: 0.5rem;
  font-size: 1.0rem;
  width: 17rem;
  height: 1.5rem;
`
const StyledInputPostText = styled.textarea`
  margin: 0.5rem;
  width: 17rem;
  height: 4.5rem;
`
const StyledLabel = styled.label`
  font-weight: 500;
  width: 25px;
`

