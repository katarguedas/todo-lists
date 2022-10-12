import { TiArrowRightOutline, TiArrowLeftOutline } from "react-icons/ti";
import styled from "styled-components";


//-----------------------------------------------------------------
//-----------------------------------------------------------------


const Arrow = ({ list, todos, setTodos, task }) => {

    //------   functions used in shiftLeft() und shiftRight() ----------

    const getListIndex = () => {
        for (let i = 0; i < todos.length; i++) {
            if (list.id === todos[i].id)
                return i
        }
    }
    const listIndex = getListIndex()

    const moveAndDelete = (array, index, direction) => {
        const t = [...todos]
        t[listIndex + direction].tasks.push(array)
        t[listIndex].tasks.splice(index, 1)
        setTodos(t)
    }

    //------   shiftRight()     -----------------------------------------

    const shiftRight = () => {

        if (task.done === false) {
            const array = {
                idi: task.idi,
                text: task.text,
                done: task.done
            }
            let index = list.tasks.findIndex(e => { return (e.idi === task.idi) })
            moveAndDelete(array, index, 1)
        }
    }
    //------   shiftLeft()     -----------------------------------------

    const shiftLeft = () => {

        if (task.done === false) {
            const array = {
                idi: task.idi,
                text: task.text,
                done: task.done
            }
            let index = list.tasks.findIndex(e => { return (e.idi === task.idi) })
            moveAndDelete(array, index, -1)
        } 
    }

    //------   Arrow end  --------------------------------------------

    //----- create Arrow-Buttons  ------------------------------------

    if (list.title === "Heute") {
        return (
            <div>
                <StyledArrowRight>
                    < TiArrowRightOutline onClick={shiftRight} data-toggle="tooltip" data-placement="right" 
                    title="Erledingte Aufgaben lassen sich nicht verschieben"/>
                </StyledArrowRight>
            </div>
        )
    } else if (list.title === "Morgen") {
        return (
            <div>
                <StyledArrowLeft>
                    < TiArrowLeftOutline onClick={shiftLeft} data-toggle="tooltip" data-placement="top" 
                    title="Erledingte Aufgaben lassen sich nicht verschieben"/>
                </StyledArrowLeft>
               
                <StyledArrowRight>
                    < TiArrowRightOutline onClick={shiftRight} data-toggle="tooltip" data-placement="top" 
                    title="Erledingte Aufgaben lassen sich nicht verschieben"/>
                </StyledArrowRight>

            </div>
        )
    } else if (list.title === "Demnächst") {
        return (
            <div>
                <StyledArrowLeft>
                    < TiArrowLeftOutline  onClick={shiftLeft} data-toggle="tooltip" data-placement="top" 
                    title="Erledingte Aufgaben lassen sich nicht verschieben"/>
                </StyledArrowLeft>
            </div>

        )
    }
}

//----------------------- END  ------------------------------------

export default Arrow;

// styled component --------------

const StyledArrowRight = styled.div`
  position: absolute;
  right: 35px;
  top: 12px;
`

const StyledArrowLeft = styled.div`
  position: absolute;
  right: 65px;
  top: 12px;
`
