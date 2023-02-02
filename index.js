const express = require('express');
const app = express();
require('dotenv').config()
const port = process.env.PORT || 8000;
const path = require('path');
const multer  = require('multer')
const upload = multer({ dest: 'csvFiles/' })

// view engine
app.set('view engine', 'ejs');
app.set('views', './views')

// urlencoded add to extract data from
app.use(express.urlencoded());

// style sheet middleware sass
const sassMiddleware = require('node-sass-middleware');

app.use(sassMiddleware({
  src: './asset/scss',
  dest: './asset/css',
  debug: false,
  outputStyle: 'extended',
  prefix:  '/css' 
}));

app.listen(port, (error) => {
    if(error){
        console.error(error);
    }
    console.log('Server is up and listening on port', port);
});