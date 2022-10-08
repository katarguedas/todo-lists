import { IoAddOutline } from "react-icons/io5";
import { v4 as uuidv4 } from 'uuid';
import React, { useRef } from 'react'

//-----------------------------------------------------

const Input = ({ listId, todos, setTodos }) => {

    const todoNameRef = useRef()

    const newTodoItem = () => {

        const listIndex = todos.findIndex(e => {
            if (e.id === listId) return listId
        })

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
        <div className="inputGroup">
            <input ref={todoNameRef} onKeyDown={newTodoKeyPress} name={listId} />
            <IoAddOutline onClick={handleAddClick} className="add" />
        </div>
    )
}

export default Input;