import { GoTrashcan } from "react-icons/go";
import { GrCheckbox } from "react-icons/gr";
import { GrCheckboxSelected } from "react-icons/gr";
import { TiArrowRightOutline } from "react-icons/ti";
import React, {useRef} from 'react';


const Todo = ({task ,idi}) => {

    const todoNameFef = useRef()

    const handleAddClick = () => {
        // console.log(todoNameFef.current.value)
        // todoNameFef.current.value = <GrCheckboxSelected />  //  ??????
    }

    return (
        <div className ="todoGroup">
            < GrCheckbox onClick={handleAddClick} />
            <span className="todos">{task}</span>
            {/* < TiArrowRightOutline /> */}
            < GoTrashcan className="trash"/>
        </div>
    )   
}

export default Todo;