import { TiArrowRightOutline, TiArrowLeftOutline } from "react-icons/ti";
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
        // console.log("Liste   ", list)
        console.log(task)

        // list.tasks.forEach(e => {
        // if ((e.idi === task.idi) && (e.done === false)) {
        if (task.done === false) {
            const array = {
                idi: task.idi,
                text: task.text,
                done: task.done
            }
            let index = list.tasks.findIndex(e => { return (e.idi === task.idi) })
            moveAndDelete(array, index, 1)
            // } else if ((e.idi === task.idi) && (e.done === true)) {
        } else if (task.done === true) {
            console.log("! Erledigte Aufgaben werden nicht verschoben")
        }
        // })
        return (null)
    }
    //------   shiftLeft()     -----------------------------------------

    const shiftLeft = () => {
        console.log(task)

        // list.tasks.forEach(e => {
        if (task.done === false) {
            const array = {
                idi: task.idi,
                text: task.text,
                done: task.done
            }
            let index = list.tasks.findIndex(e => { return (e.idi === task.idi) })
            // console.log("Taskindex: ",index)
            moveAndDelete(array, index, -1)
        } else if (task.done === true) {
            console.log("! Erledigte Aufgaben werden nicht verschoben")
        }
        // })
    }

    //------   Arrow end  --------------------------------------------


    //----- create Arrow-Buttons  ------------------------------------

    if (list.title === "Heute") {
        return (
            <div className="arrowRight">
                < TiArrowRightOutline onClick={shiftRight} />
            </div>
        )
    } else if (list.title === "Morgen") {
        return (
            <div>
                < TiArrowLeftOutline className="arrowLeft" onClick={shiftLeft}  />
                < TiArrowRightOutline className="arrowRight" onClick={shiftRight} />
            </div>
        )
    } else if (list.title === "Demnächst") {
        return <div>
            < TiArrowLeftOutline className="arrowLeft" onClick={shiftLeft} />
        </div>
    }
}

//----------------------- END  ------------------------------------

export default Arrow;