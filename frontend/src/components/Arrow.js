import { TiArrowRightOutline, TiArrowLeftOutline } from "react-icons/ti";

import styled from "styled-components";

import Tooltip from '@mui/material/Tooltip';
//-----------------------------------------------------------------

const Arrow = ({ list, todos, task, moveAndDelete }) => {


    const onMoveAndDeleteClick = (array, index, direction) => {
        moveAndDelete(array, index, direction, list.id)
    }

    //---------------------------------------------

    const shift = (direction) => {
        if (task.done === false) {
            const array = {
                idi: task.idi,
                text: task.text,
                done: task.done
            }
            let index = list.tasks.findIndex(e => { return (e.idi === task.idi) })

            onMoveAndDeleteClick(array, index, direction)
        }
    }

    //------   Arrow end  --------------------------------------------

    //----- create Arrow-Buttons  ------------------------------------

    if (list.title === "Heute") {
        return (
            <div>
                <Tooltip enterDelay={500} title=
                    {task.done ? "Verschieben erledigter Todos nicht möglich" : ""} arrow>
                    <StyledArrowRight>
                        < TiArrowRightOutline onClick={() => shift(1)} />
                    </StyledArrowRight>
                </Tooltip>
            </div>
        )
    } else if (list.title === "Morgen") {
        return (
            <div>
                <Tooltip enterDelay={500} title=
                    {task.done ? "Verschieben erledigter Todos nicht möglich" : ""} arrow>
                    <StyledArrowLeft>
                        < TiArrowLeftOutline onClick={() => shift(-1)} />
                    </StyledArrowLeft>
                </Tooltip>

                <Tooltip enterDelay={500} title=
                    {task.done ? "Verschieben erledigter Todos nicht möglich" : ""} arrow>
                    <StyledArrowRight>
                        < TiArrowRightOutline onClick={() => shift(1)} />
                    </StyledArrowRight>
                </Tooltip>
            </div>
        )
    } else if (list.title === "Demnächst") {
        return (
            <div>
                <Tooltip enterDelay={500} title=
                    {task.done ? "Verschieben erledigter Todos nicht möglich" : ""} arrow>
                    <StyledArrowLeft2>
                        < TiArrowLeftOutline onClick={() => shift(-1)} />
                    </StyledArrowLeft2>
                </Tooltip>
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
const StyledArrowLeft2 = styled(StyledArrowLeft)`
position: absolute;
right: 35px;
`
const StyledInfo = styled.span`
  display: ${props => props.done === "true" ? "inline" : "none"};
  background-color: white;
  color: red;
  border: 1px solid red;
`