require('dotenv').config();
const express = require('express');
const path = require('path');

const mainRouter = require('./routes/main');
const userRouter = require('./routes/user');
const productRouter = require('./routes/product');
const productApiRouter = require('./routes/api/product');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true})),
app.use(express.json());

app.use('/', mainRouter)
app.use('/user', userRouter)
app.use('/product', productRouter)

app.use('/api/product', productApiRouter);

const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
});