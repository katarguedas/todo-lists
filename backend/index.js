const e = require('express');
const express = require('express')
const app = express()
const port = 3001

const listArray = [
  {
    id: "bc5610f9-1a16-4cad-8fac-3033c3afbfdb",
    title: "Heute",
    tasks: [
      {
        idi: "ab243606-97ff-4a20-b000-06d413d996c1",
        text: "Apotheke",
        done: false
      },
      {
        idi: "58c60a26-8e8a-48cb-9a68-83d583da9010",
        text: "Custom Hook wiederholen",
        done: true
      },
      {
        idi: "eb292c32-5bf4-4165-a25e-6d115c0fd7dc",
        text: "einkaufen",
        done: false
      }
    ]
  },
  {
    id: "bc22bcf9-f3ed-4d75-adb3-478d6eb54cee",
    title: "Morgen",
    tasks: [
      {
        idi: "bf136068-fe71-473b-9d05-ecafca2fc363",
        text: "Kurs",
        done: false
      },
      {
        idi: "8649063e-d0a2-40c8-9fb5-533f94740c9b",
        text: "coden",
        done: false
      }
    ]
  },
  {
    id: "e94f8b28-e9cf-4a35-b93a-d78d75261555",
    title: "Demnächst",
    tasks: [
      {
        idi: "af92fadf-d169-4564-bcc8-d7a8534b2dfa",
        text: "Fenster putzen",
        done: false
      }
    ]
  }
]

let postsList = [
  {
    id: "ac92fadf-d169-va64-bed8-d7a8534b2dfa",
    title: "Küche",
    text: "Toaster kaputt"
  },
  {
    id: "af11fadf-d169-va64-bed8-d7a8534b2dfa",
    title: "Terrasse",
    text: "Pflanzen vor dem ersten Frost reinholen"
  },
  {
    id: "af92fadf-d124-va64-bed8-d7a8534b2dfa",
    title: "Dezember",
    text: "Akten durchgehen"
  }
]
// CRUD - create, read, update, delete


// read:
// GET - Route, keine Parameter oder Queries notwendig
// Name z. B.: "/todos"
// liefert alle Todos an React App (Array)

// create:
// POST - Route,  keine Parameter oder Queries notwendig
// Name z. B.: "/todo"
// bekommt ein neues Todo aus React und fügt hier im Backend dem Array hinzu

// update:
// PUT - Route, Parameter/Queries erforderlich: id
// Name z. B.: "/todo"
// findet ein vorhandenes Todo und toggled den key

//delete:
// DELETE - Route, Parameter/Queries erforderlich: id
// Name z. B.: "/todo"
// findet ein vorhandenes Todo und löscht es aus dem Array

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World! :-)')
});

app.get('/todos', (req, res) => {
  res.status(200).send(listArray);
})

app.get('/posts', (req, res) => {
  res.status(200).send(postsList);
})

app.post('/newtodo', (req, res) => {
  const todo = req.body;
  const listnumber = req.query.listnr;
  listArray[listnumber-1].tasks.push(todo);
  res.status(200).send('Todo erfolgreich hinzugefügt')
})

app.post('/newpost', (req, res) => {
  const post = req.body;
  postsList.push(post);
  res.status(200).send('Post erfolgreich hinzugefügt')
})

app.put('/toggletodo', (req, res) => {
  const id = req.query.id;
  const listnumber = parseInt(req.query.listnr);
  listArray[listnumber-1].tasks.map(e => {
    if (e.idi === id) {
      e.done = !e.done;
      res.status(200).send('Todo erfolgreich geändert')
    }
  })
  // res.status(200).send('Todo erfolgreich geändert')
})

app.delete('/deletetodo', (req ,res) => {
  const listnumber = parseInt(req.query.listnr);
  const id = req.query.id;
  const index = listArray[listnumber-1].tasks.findIndex(e => (e.idi) === id);
  listArray[listnumber-1].tasks.splice(index, 1)
  res.status(200).send('Todo erfolgreich gelöscht')
})

app.delete('/deletepost', (req ,res) => {
  const id = req.query.id;
  console.log("id:", id)
  postsList = postsList.filter(e => e.id != id)
  res.status(200).send('Post erfolgreich gelöscht')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
