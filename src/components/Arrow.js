import { TiArrowRightOutline, TiArrowLeftOutline } from "react-icons/ti";



const Arrow = ({ list, todos, setTodos, taskId }) => {

    const shiftLeft = () => {
        console.log("Liste   ", list)
        console.log("taskId:  ", taskId)


        const getListIndex = () => {
            for (let i = 0; i < todos.length; i++) {
                if (list.id === todos[i].id)
                return i
            }
        }

        const listIndex = getListIndex()

        const moveAndDelete = (array, index) => {
            const t = [...todos]
            t[listIndex + 1].tasks.push(array)
            t[listIndex].tasks.splice(index, 1)
            setTodos(t)
        }

        list.tasks.forEach(e => {
            if (e.idi === taskId) {
                const array = {
                    idi: e.idi,
                    text: e.text,
                    done: e.done
                }
                let index = list.tasks.findIndex(e => {return (e.idi === taskId)})
                console.log("Index: ",index)
                moveAndDelete(array, index)
            
            }
        })

        const listIndex2 = todos.findIndex(e => {
            return (e.title === "Morgen") 
        })


        const t = [...todos]
        if (list.title === "Morgen") {
            t[0].tasks.push()
            setTodos(t);
        }
        return (null)
    }

    if (list.title === "Heute") {
        // console.log("heute", list.title)
        return (
            <div className="arrowRight">
                < TiArrowRightOutline onClick={shiftLeft} />
            </div>
        )
    } else if (list.title === "Morgen") {
        // console.log("morgen", list.title)
        return (
            <div>
                < TiArrowLeftOutline className="arrowLeft" />
                < TiArrowRightOutline className="arrowRight" onClick={shiftLeft} />
            </div>
        )
    } else if (list.title === "Demnächst") {
        // console.log("demnächst", list.title)
        return <div>
            < TiArrowLeftOutline className="arrowLeft" />
        </div>
    }
}

export default Arrow;