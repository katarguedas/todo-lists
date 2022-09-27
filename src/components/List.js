import { IoTerminal } from "react-icons/io5";
import Input from "./Input";
import Todo from "./Todo";


const List = (props) => {

    console.log("props:", { props });
    
    // tasks: [items
    //     {
    //     idi: uuidv4(),
    //     text: "Steuererklärung",
    //     done: false
    //   },
    //   {
    //     idi: uuidv4(),
    //     text: "Geschenk kaufen",
    //     done: false
    //   }

    return (
        <div className="list">
            <h2>{props.head}</h2>
            <Input />
            {/* { 
                props.items.text.map(e => (
                    <Todo task={e} />
                ))
            } */}
            {
                props.items.map(e => (
                    <Todo task={e.text} key={e.idi}/>
                ))
            }
             {/* {
                props.items.idi.forEach(e => (
                    console.log(e)
                ))
             } */}
                
        </div>
    );
}

export default List;
