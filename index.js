
const express = require('express')
const app = express()
const path = require("node:path");
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));


const messages = [
  {
    text: "Hi there!",
    user: "(DEMO) Amando",
    added: new Date().toLocaleString('en-GB', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    })
  },
  {
    text: "Hello World!",
    user: "(DEMO) Charles",
    added: new Date().toLocaleString('en-GB', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    })
  }
];

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.post('/new', (request, response) => {
  console.log(request.body);
  messages.unshift({ user: request.body.messageAuthor, text: request.body.messageText, added: new Date().toLocaleString('en-GB', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  })});
  response.redirect("/");
});
app.get('/', (request, response) => {
  response.render("index", {title: "Mini Messageboard", messages: messages})
  
})
app.get('/new', (request, response) => {
  response.render("new", {});
})

const PORT = 3000
app.listen(PORT, () => {
  console.log(`Server running http://localhost:${PORT}/`)
})