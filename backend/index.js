const e = require('express');
const express = require('express');
const { v4: uuidv4 } = require('uuid');
const mongoose = require('mongoose');
const { response } = require('express');
const pwdat = require('./pwdat');
const app = express()
const port = 3001
//--------------------------------------------------------
//--------------------------------------------------------

const list = [
  {
    id: uuidv4(),
    title: "Heute",
    tasks: []
  },
  {
    id: uuidv4(),
    title: "Morgen",
    tasks: []
  },
  {
    id: uuidv4(),
    title: "Demnächst",
    tasks: []
  }
]


app.use(express.json());

app.use(async function (req, res, next) {
  const password = pwdat()
  // LOCAL:
  // await mongoose.connect('mongodb://localhost:27017/todolists');
  //CLOUD REMOTE:
  await mongoose.connect('mongodb+srv://admin:'+password+'@cluster0.3klbuox.mongodb.net/codingschule?retryWrites=true&w=majority');
  next();
})

const todoSchema = new mongoose.Schema({
  idi: String,
  text: String,
  done: Boolean
});

const todoListSchema = new mongoose.Schema({
  id: String,
  title: String,
  tasks: [
    todoSchema
  ]
});

const postSchema = new mongoose.Schema({
  id: String,
  title: String,
  text: String
});

const TodoList = mongoose.model('todoList', todoListSchema);
const Todo = mongoose.model('todos', todoSchema);
const Post = mongoose.model('posts', postSchema);


app.get('/', (req, res) => {
  res.send('Hello World! :-)')
});

app.get('/todolists', async (req, res, next) => {
  const response = await TodoList.find();
  res.status(200).send(response)
})

app.get('/posts', async (req, res) => {
  const response = await Post.find()
  res.status(200).send(response);
})

// TODO HINZUFÜGEN ---------------------
app.post('/todo', async (req, res) => {
  const listId = req.query.listnr;
  const todo = req.body;
  const response = await TodoList.updateOne({ id: listId }, { $push: { tasks: todo } })
  res.status(200).send("Todo hinzugefügt");
})

// PostIt hinzufügen -------------------
app.post('/newpost', async(req, res) => {
  const post = req.body;
  const response = await Post.create(post)
  res.status(200).send('Post erfolgreich hinzugefügt')
})

// 'TODO ÄNDERN ---------------------------
app.put('/toggletodo', async (req, res) => {
  const listId = "list" + req.query.listnr;
  const todoId = req.query.id;
  const response = await TodoList.findOne({ id: listId });
  response.tasks.map(e => {
    e.idi === todoId ? e.done = !e.done : null
  })
  response.save();
  res.status(200).send('Todo erfolgreich geändert')
})

// DELETE TODO ----
app.delete('/deletetodo', async (req, res) => {
  const listId = "list" + req.query.listnr;;
  const todoId = req.query.id;
  const response = await TodoList.findOne({ id: listId })
  response.tasks = response.tasks.filter(e => e.idi != todoId)
  response.save();
  res.status(200).send('Todo erfolgreich gelöscht?')
})

app.delete('/deletepost', async (req, res) => {
  const id = req.query.id;
  const response = await Post.deleteOne({ id: id })
  res.status(200).send('Post erfolgreich gelöscht')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
