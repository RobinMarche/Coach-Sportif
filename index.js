require('dotenv').config();

const express = require('express');
const app = express()

app.set('view engine', 'ejs');
app.set('views', __dirname + '/app/views');

app.use(express.static(__dirname + '/Ressources'))

app.use(express.urlencoded({ extended : false }));

const router = require('./app/router')


app.use(router);


app.listen(process.env.PORT, () => {
    console.log(`Running on ${process.env.BASE_URL}:${process.env.PORT}`);
})