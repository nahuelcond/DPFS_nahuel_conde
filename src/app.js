require('dotenv').config();
const express = require('express');
const path = require('path');
const session = require('express-session')

const mainRouter = require('./routes/main');
const userRouter = require('./routes/user');
const productRouter = require('./routes/product');

const productApiRouter = require('./routes/api/product');
const userApiRouter = require('./routes/api/user');
const authorizationApiRouter = require('./routes/api/authorization');


const adminValidator = require('./middlewares/adminValidator');
const authenticationMiddleware = require('./middlewares/authenticationMiddleware');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true})),
app.use(express.json());
app.use(session({
    secret: process.env.JWT_SECRET,
    resave: true,
    saveUninitialized: true
}));
app.use(authenticationMiddleware);

app.use('/', mainRouter)
app.use('/user', userRouter)
app.use('/product',adminValidator, productRouter)

app.use('/auth', authorizationApiRouter)
app.use('/api/product', productApiRouter);
app.use('/api/user', userApiRouter);



const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
});