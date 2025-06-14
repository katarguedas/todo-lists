import React, { useRef } from 'react'

import { IoAddOutline } from "react-icons/io5";

import styled from "styled-components";

//-----------------------------------------------------

const Input = ({ listId, todos, addTodo }) => {

    const todoNameRef = useRef()
    //............................
    const newTodoItem = () => {

        const listIndex = todos.findIndex(e => { return (e.id === listId) })

      if ((todoNameRef !== "") && (todoNameRef.current.value.trim() !== "")) {
          console.log(todoNameRef.current.value)
            addTodo(listIndex, todoNameRef.current.value)
            todoNameRef.current.value = "";
        }
    }
    //............................
    const handleAddClick = () => {
        newTodoItem();
    }
    //............................ F
    const newTodoKeyPress = event => {
        if (event.keyCode === 13) {
            newTodoItem();
        }
    }

    //------------------------------------------------------------------
    return (
        <StyledInputGroup>
            <StyledInput ref={todoNameRef} autoComplete="off" onKeyDown={newTodoKeyPress} name={listId} />
            <StyledAdd onClick={handleAddClick} />
        </StyledInputGroup>
    )
}

export default Input;

//----------- styled component ----------------------------------------------------

const StyledInputGroup = styled.div`
  display: inline-flex;
  justify-content: center;
  margin-bottom: 6px;
  margin-top: 15px;
`
const StyledAdd = styled(IoAddOutline)`
  padding: 0.1rem;
  margin: 0.1rem 0.5rem 0.1rem 1.5rem;
  font-size: 1.75rem;
  color: #fff;
  background-color: #06d6a0;
  border-radius: 0.15em;
  :active {
    transform: translateY(2px);
  }
`
const StyledInput = styled.input`
  font-size: 1.0rem;
  width: 18rem;
  height: 1.75rem;
`