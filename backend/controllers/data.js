const { validationResult } = require('express-validator');

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Data = require('../models/data');


exports.findData = async (req, res, next) => {
  
  if(req.body.name){
    const name = req.body.name;

    try {
      const data = await Data.findByName(name);
      if (data[0].length == 0) {
        const error = new Error('No location with this name was found.');
        error.statusCode = 401;
        throw error;
      }
  
      const storedUsers = []; // create an empty array to store all data entries
  
      for (let i = 0; i < data[0].length; i++) {
        const storedUser = data[0][i];
        storedUsers.push({
          name: storedUser.name,
          latitude: storedUser.latitude,
          longitude: storedUser.longitude,
          day: storedUser.day,
          time: storedUser.time,
          people: storedUser.people,
        });
      }
  
    res.status(200).json(storedUsers);
  
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    } 

  }

  if(req.body.day){
    const day = req.body.day;

    try {
      const data = await Data.findByDay(day);
      if (data[0].length == 0) {
        const error = new Error('No location with this name was found.');
        error.statusCode = 401;
        throw error;
      }
  
      const storedUsers = []; // create an empty array to store all data entries
  
      for (let i = 0; i < data[0].length; i++) {
        const storedUser = data[0][i];
        storedUsers.push({
          name: storedUser.name,
          latitude: storedUser.latitude,
          longitude: storedUser.longitude,
          day: storedUser.day,
          time: storedUser.time,
          people: storedUser.people,
        });
      }
  
    res.status(200).json(storedUsers);
  
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    } 

  }

  if(req.body.time){
    const time = req.body.time;

    try {
      const data = await Data.findByTime(time);
      if (data[0].length == 0) {
        const error = new Error('No location with this name was found.');
        error.statusCode = 401;
        throw error;
      }
  
      const storedUsers = []; // create an empty array to store all data entries
  
      for (let i = 0; i < data[0].length; i++) {
        const storedUser = data[0][i];
        storedUsers.push({
          name: storedUser.name,
          latitude: storedUser.latitude,
          longitude: storedUser.longitude,
          day: storedUser.day,
          time: storedUser.time,
          people: storedUser.people,
        });
      }
  
    res.status(200).json(storedUsers);
  
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    } 

  }
  //const name = req.body.name;
   
};
