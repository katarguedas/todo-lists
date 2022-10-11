import { IoAddOutline } from "react-icons/io5";
import { v4 as uuidv4 } from 'uuid';
import React, { useRef } from 'react'
import styled from "styled-components";

//-----------------------------------------------------

const Input = ({ listId, todos, setTodos }) => {

    const todoNameRef = useRef()

    const newTodoItem = () => {

        const listIndex = todos.findIndex(e => {return (e.id === listId)})
        console.log("listIndex",listIndex)

        if ((todoNameRef !== "") && (todoNameRef.current.value.trim() !== "")) {
      
            const t = [...todos];
            t[listIndex].tasks.push({
                idi: uuidv4(),
                text: todoNameRef.current.value,
                done: false
            })
            setTodos(t);

            todoNameRef.current.value = "";
        }
    }

    const handleAddClick = () => {
        newTodoItem();
    }

    const newTodoKeyPress = event => {
        if (event.keyCode === 13) {
            newTodoItem();
        }
    }

    return (
        <StyledInputGroup>
            <StyledInput ref={todoNameRef} onKeyDown={newTodoKeyPress} name={listId} />
            <StyledAdd onClick={handleAddClick} />
        </StyledInputGroup>
    )
}

export default Input;

// styled component --------------

const StyledInputGroup = styled.div`
  display: inline-flex;
  justify-content: center;
  margin-bottom: 6px;
  margin-top: 15px;
`
const StyledAdd = styled(IoAddOutline)`
  padding: 0.1rem;
  margin: 0.1rem 0.5rem;
  font-size: 2.0rem;
  color: rgb(134, 47, 216);
  background-color: rgb(178, 178, 209);
  border-radius: 0.15em;
`
const StyledInput = styled.input`
  font-size: 1.0rem;
`