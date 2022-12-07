const path = require("path");
require("dotenv").config()
const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT |3001;
const mongoose = require('mongoose');
const findOrCreate = require('mongoose-findorcreate');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static(path.resolve(__dirname, '../client/build')));


mongoose.connect(process.env.MLINK, { useNewUrlParser: true, useUnifiedTopology: true });

const carSchema = new mongoose.Schema({
    carName : String,
    mileage : String,
    location : String,
    engine : String,
    transmission : String,
    price : String,
    image : String
});

carSchema.plugin(findOrCreate);

const Car = new mongoose.model("Car", carSchema);

app.get("/getCar", (req,res)=>{
    Car.find({}, function(err, result){
        if(err) console.log(err);
        else{
            res.send(result);
        }
    })
});

app.post("/add", (req,res)=>{
    const new_car = new Car({
        carName : req.body.carName,
        mileage : req.body.mileage,
        location : req.body.location,
        engine : req.body.engine,
        transmission : req.body.transmission,
        price : req.body.price,
        image : req.body.image
    });
    new_car.save(function(err, result){
        if(err) console.log(err);
    });
});

app.listen(port, ()=>{
    console.log("Server running on port 3001");
})

module.exports = app;