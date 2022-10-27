const e = require('express');
const express = require('express')
const mongoose = require('mongoose');
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

app.use(async function (req, res, next) {
  await mongoose.connect('mongodb://localhost:27017/todolists');
  // await mongoose.connect('mongodb+srv://admin:<passwort>@cluster0.3klbuox.mongodb.net/codingschule?retryWrites=true&w=majority');
  next();
})

const todoSchema = new mongoose.Schema({
  id: String,
  title: String,
  tasks: {
    idi: String,
    text: String,
    done: Boolean
  }
});

const postSchema = new mongoose.Schema({
  id: String,
  title: String,
  text: String

})

const Todo = mongoose.model('todos', todoSchema);
const Post = mongoose.model('posts', postSchema);


app.get('/', (req, res) => {
  res.send('Hello World! :-)')
});

app.get('/todos', async (req, res) => {
  const response = await Todo.find()
  res.status(200).send(response);
})

app.get('/posts', async (req, res) => {
  const response = await Post.find()
  res.status(200).send(response);
})

// --- ADD TODO -------------<< hier habe ich Probleme
app.post('/newtodo', async(req, res) => {
  const listId = req.query.listnr;
  console.log("listnr: ",listId, "\n")
  const todo = req.body
  console.log("todo: ", todo, "\n")

  let response = await Todo.findOne( {id: listId})
  console.log("response nach findOne:",response, "\n")

  response = await Todo.updateOne({ id: listId}, { $push: {tasks: todo}} )  
  console.log("\nresponse nach updateOne:",response, "\n")
  }
)

app.post('/newpost', async(req, res) => {
  const post = req.body;
  console.log(post)
  const response = await Post.create(post)
  
  res.status(200).send('Post erfolgreich hinzugefügt')
})

app.put('/toggletodo', async(req, res) => {   // gehe ich später an
  const id = req.query.id;
  const listId = req.query.listnr;
  const todo = await Todo.findOne( { task: {idi: id }});
  console.log("todo:", todo)
  todo.done = !todo.done;
  const response = await Todo.updateOne({ id: req.query.id }, todo )

  res.status(200).send('Todo erfolgreich geändert')
  })


// DELETE TODO ----------<< hier habe ich Probleme
app.delete('/deletetodo', async (req, res) => {
  const listId = req.query.listnr;
  const id = req.query.id;

  console.log("listid:",listId)
  console.log("id:",id)

  const response = await Todo.findOneAndUpdate( 
    {id: listId, idi: id},
    {$pull: {"tasks.$.idi": id} }
    )
console.log(response)

  // response = Todo.updateOne( {},
  //   { $pull: { "tasks": {idi: id} }
  //   }
  // )
  // response.tasks.updateOne( { $pull: {tasks: {id: id }}} )
  //  response = await Todo.deleteOne( {id: listId}, { "tasks.idi": id } ) 

  res.status(200).send('Todo erfolgreich gelöscht?')
})


app.delete('/deletepost', async(req, res) => {
  const id = req.query.id;
  console.log("id:", id)
  const response =await Post.deleteOne({id: id})
  console.log(response);
  res.status(200).send('Post erfolgreich gelöscht')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
