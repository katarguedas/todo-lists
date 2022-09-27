import './App.css';
import Headline from './components/Headline';
import List from './components/List';
import { v4 as uuidv4 } from 'uuid';


// Variablen --------------
const listArray = [
  {
    id: uuidv4(),
    title: "Heute",
    tasks: [
      {
      idi: uuidv4(),
      text: "Einkaufen",
      done: false
    },
    {
      idi: uuidv4(),
      text: "Kochen",
      done: false
    }]
    },
  {
    id: uuidv4(),
    title: "Morgen",
    tasks: [
      {
      idi: uuidv4(),
      text: "Fenster putzen",
      done: false
      },
      {
        idi: uuidv4(),
        text: "Coden",
        done: false
      }
    ]
  },
  {
    id: uuidv4(),
    title: "Demnächst",
    tasks: [
      {
      idi: uuidv4(),
      text: "Steuererklärung",
      done: false
    },
    {
      idi: uuidv4(),
      text: "Geschenk kaufen",
      done: false
    }
  ]
  }
]


function App() {
  return (
    <div className="App">
      <Headline />
      <div className="listGroup">
        {
          listArray.map(e => (
          <List head={e.title} key={e.id} items={(e.tasks)} />
          ))
        }
      </div>
    </div>
  );
}

export default App;






// const listArray = [
//   {
//     id: uuidv4(),
//     title: "Heute",
//     tasks: {
//       idi: [uuidv4(), uuidv4()],
//       text: ["Einkaufen", "Kochen"],
//       done: false
//     }
//   },
//   {
//     id: uuidv4(),
//     title: "Morgen",
//     tasks: {
//       idi: [uuidv4(), uuidv4()],
//       text: ["Fenster putzen", "Coden"],
//       done: false
//     }
//   },
//   {
//     id: uuidv4(),
//     title: "Demnächst",
//     tasks: {
//       idi: [uuidv4(), uuidv4()],
//       text: ["Steuererklärung", "Geschenk kaufen"],
//       done: false
//     }
//   }
// ]