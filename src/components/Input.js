import { IoAddOutline } from "react-icons/io5";
import { v4 as uuidv4 } from 'uuid';
import React, { useRef } from 'react'

//-----------------------------------------------------

const Input = ({ listId, todos, setTodos }) => {

    const todoNameRef = useRef()

    const newTodoItem = () => {

        // finde heraus, in welcher Lsite die Eingabe erfolgt:
        const listIndex = todos.findIndex(e => {
            if (e.id === listId) {
                return listId
            }
        })
        console.log("List-Index: ", listIndex)
        const liLength = todos[listIndex].tasks.length;
        console.log("Eingabe: ", todoNameRef.current.value)
        console.log("TaskArrayLänge:", liLength)

        if (todoNameRef !== "") {

            const t = [ ...todos ];
            
            t[listIndex].tasks[liLength] = {

                idi: uuidv4(),
                text: todoNameRef.current.value,
                done: false
            }
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