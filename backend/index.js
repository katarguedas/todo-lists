const express = require('express')
const app = express()
const port = 3001

const listArrayInit = [
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

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
