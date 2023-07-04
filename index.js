require('dotenv').config();

const express = require('express');
const app = express()

app.set('views', './app/views');
app.set('view engine', 'ejs');

app.use(express.static('Ressources'))

const router = require('./app/router')


app.use(router);


app.listen(process.env.PORT, () => {
    console.log(`Running on ${process.env.BASE_URL}:${process.env.PORT}`);
})