// import express from 'express';
const express = require('express');
const path = require('path');
const app = express();
const Router = express.Router();
// const mongoose = require('mongoose');
// const bodyParser = require("body-parser");
// const Schema = mongoose.Schema;

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// mongoose.connect("mongodb://localhost/Movies");
//
// var movie = {
//     nombre : String,
//     descripcion : String
// }
//
// var movie_schema = new Schema(movie);
// var movie = mongoose.model("movie",movie_schema);


//querys
app.use('/api/',Router);
Router.get('/getmovies/',(req,res)=> {
    res.json({
        movies: [{"movie":"Pirates of the caribbean"},{"movie":"Predator VS pirates of the caribbean"}]
    });
})

// Router.post('/insertmovie/',(req,res) => {
//     console.log(req.body.nombre);
//     console.log(req.body.descripcion);
// });

Router.get('/insertmovie/',(req,res)=> {
    res.json({
        movies: [{"movie":"Pirates of the caribbean"},{"movie":"Predator VS pirates of the caribbean"}]
    });
})


//
app.use(express.static(__dirname+'/public'));
app.get('*',(req,res) => {
    res.sendFile(path.resolve(__dirname,'public','index.html'));
})


app.listen(3000,() => {
    console.log("listen port 3000: good luck;");
})
