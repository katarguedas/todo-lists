import { TiArrowRightOutline, TiArrowLeftOutline } from "react-icons/ti";

import styled from "styled-components";

import { useState } from 'react';
//-----------------------------------------------------------------

const Arrow = ({ list, todos, task, moveAndDelete }) => {

    const [showinfo, setShowinfo] = useState(0);

    const onMoveAndDeleteClick = (array, index, direction) => {
        const listIndex = todos.findIndex(e => (e.id) === list.id)
        moveAndDelete(array, index, direction, listIndex)
    }

    //---------------------------------------------

    const show = () => setShowinfo(1)
    const showhide = () => setShowinfo(0)

    const shift = (direction) => {
        if (task.done === true) {
            show()
        } else {
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
                <StyledArrowRight>
                    < TiArrowRightOutline onClick={() => shift(1)} />
                    {showinfo ?
                        <StyledInfo
                            done={task.done.toString()}  >
                            Erledigte Aufgaben lassen sich nicht verschieben
                        </StyledInfo>
                        : null}
                    {showinfo ? setTimeout(showhide, 1500) : null}
                </StyledArrowRight>
            </div>
        )
    } else if (list.title === "Morgen") {
        return (
            <div>
                <StyledArrowLeft>
                    < TiArrowLeftOutline onClick={() => shift(-1)} />
                    {showinfo ?
                        <StyledInfo
                            done={task.done.toString()}  >
                            Erledigte Aufgaben lassen sich nicht verschieben
                        </StyledInfo>
                        : null}
                    {showinfo ? setTimeout(showhide, 1500) : null}
                </StyledArrowLeft>

                <StyledArrowRight>
                    < TiArrowRightOutline onClick={() => shift(1)} />
                    {showinfo ?
                        <StyledInfo
                            done={task.done.toString()}  >
                            Erledigte Aufgaben lassen sich nicht verschieben
                        </StyledInfo>
                        : null}
                    {showinfo ? setTimeout(showhide, 1500) : null}
                </StyledArrowRight>
            </div>
        )
    } else if (list.title === "Demnächst") {
        return (
            <div>
                <StyledArrowLeft2>
                    < TiArrowLeftOutline onClick={() => shift(-1)} />
                    {showinfo ?
                        <StyledInfo
                            done={task.done.toString()}  >
                            Erledigte Aufgaben lassen sich nicht verschieben
                        </StyledInfo>
                        : null}
                    {showinfo ? setTimeout(showhide, 1500) : null}
                </StyledArrowLeft2>
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