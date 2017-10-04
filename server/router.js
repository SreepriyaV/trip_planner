const express=require('express');
const router=express.Router();
const Hotel = require('./models').Hotel;
const Restaurant=require('./models').Restaurant;
const Place=require('./models').Place;
const Activity=require('./models').Activity;
var Promise = require('bluebird');


module.exports=router;

router.get('/',(req,res,next)=>{
   //{ include: [{ all: true }] } : includes the places 
  return Promise.all([Hotel.findAll({ include: [{ all: true }] }),Restaurant.findAll({ include: [{ all: true }] }),Activity.findAll({ include: [{ all: true }] })])
  .spread((hotel,restaurant,activity)=>{
      res.json({hotel: hotel, restaurant:restaurant,activity:activity});  //sending multiple data 
  });
    
});