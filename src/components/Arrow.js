import { TiArrowRightOutline, TiArrowLeftOutline } from "react-icons/ti";
import styled from "styled-components";
import ReactTooltip from "react-tooltip";
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
                    < TiArrowRightOutline data-tip data-for={task.done === true ? "shiftInfo" : {}} onClick={shiftRight} />
                </StyledArrowRight>
                <ReactTooltip type="light" event="click" id="shiftInfo" place="top" effect="solid" border={true} eventOff="click" >
                    Erledigte Aufgaben können nicht verschoben werden.
                </ReactTooltip>
            </div>
        )
    } else if (list.title === "Morgen") {
        return (
            <div>
                <StyledArrowLeft>
                    < TiArrowLeftOutline data-tip data-for={task.done === true ? "shiftInfo" : {}} onClick={shiftLeft} />
                </StyledArrowLeft>

                <ReactTooltip type="light" event="click" eventOff="click" id="shiftInfo" place="top" effect="solid" border={true} >
                    Erledigte Aufgaben können nicht verschoben werden.
                </ReactTooltip>
               
                <StyledArrowRight>
                    < TiArrowRightOutline data-tip data-event="click" data-event-off="dblclick" data-for={task.done === true ? "shiftInfo" : {}} onClick={shiftRight} />
                </StyledArrowRight>
                <ReactTooltip type="light" event="click" id="shiftInfo" place="top" effect="solid" border={true} eventOff="click" >
                    Erledigte Aufgaben können nicht verschoben werden.
                </ReactTooltip>
            </div>
        )
    } else if (list.title === "Demnächst") {
        return (
            <div>
                <StyledArrowLeft>
                    < TiArrowLeftOutline data-tip data-for={task.done === true ? "shiftInfo" : {}} onClick={shiftLeft} />
                </StyledArrowLeft>
                <ReactTooltip type="light" event="click" id="shiftInfo" place="top" effect="solid" border={true} eventOff="click" >
                    Erledigte Aufgaben können nicht verschoben werden.
                </ReactTooltip>
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
