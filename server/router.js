const express=require('express');
const router=express.Router();
const Hotel = require('./models').Hotel;
const Restaurant=require('./models').Restaurant;
const Place=require('./models').Place;
const Activity=require('./models').Activity;
var Promise = require('bluebird');


module.exports=router;

router.get('/',(req,res,next)=>{
   
  return Promise.all([Hotel.findAll(),Restaurant.findAll(),Activity.findAll()])
  .spread((hotel,restaurant,activity)=>{
      res.json({hotel: hotel, restaurant:restaurant,activity:activity});  //sending multiple data 
  });
    
});