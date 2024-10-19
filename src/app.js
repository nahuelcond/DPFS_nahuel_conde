require('dotenv').config();
const express = require('express');
const path = require('path');

const mainRouter = require('./routes/main')

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true})),
app.use(express.json());

app.use('/', mainRouter)



const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
});