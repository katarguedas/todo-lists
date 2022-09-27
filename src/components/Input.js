import { IoAddOutline } from "react-icons/io5";
import React, {useRef} from 'react'

const Input = () => {

    const todoNameFef = useRef()

    const handleAddClick = () => {
        console.log(todoNameFef.current.value)
        todoNameFef.current.value = ""
    }
    return (
        <div className="inputGroup">
        <input ref={todoNameFef}/>
        <IoAddOutline onClick={handleAddClick} className="add"/>
        </div>
    )
}

export default Input;