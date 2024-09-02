require("dotenv").config();
const express  = require("express");
const exphbs = require('express-handlebars');
const main_routes = require("./Routes/router")
const path = require('path');
const port = 8000;

const app = express()


app.use(express.json())
app.use(express.static(path.join(__dirname, 'static')))

// app.engine("handlebars", exhbs.engine())
// app.set("view engine", "handlebars")

// OR

// Set up Handlebars as the view engine
app.engine('handlebars', exphbs.engine({
    extname: '.handlebars', // or '.html', or another extension
    defaultLayout: 'main', // specify your default layout file
    layoutsDir: 'views/layouts/', // directory where your layouts are stored
    partialsDir: 'views/' // directory where your partials are stored
  }));
  
  app.set('view engine', 'handlebars');
  app.set('views', path.join(__dirname, 'views')); // directory where your view templates are stored
  

app.use('/', main_routes)

app.listen(port, ()=>{
    console.log(
    `Server started successfully\nRunning at http://127.0.0.1:${port}`
        );
})

// module.exports = app;
