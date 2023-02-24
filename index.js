const express = require('express');
const app = express();
require('dotenv').config()
const port = process.env.PORT ||8000;
const path = require('path');
const expressLayouts = require('express-ejs-layouts');
const multer  = require('multer');
const cors = require('cors');

app.use(cors())

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

// css files
app.use(express.static(path.join(__dirname, 'asset')));

// layouts
app.use(expressLayouts);
// extract style and scripts from sub pages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

// routes
app.use('/', require('./routes'));

app.listen(port, (error) => {
    if(error){
        console.log("error in listning "+error);
    }
    console.log('Server is up and listening on port', port);
});