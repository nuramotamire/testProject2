const express= require('express');
const rout=express.Router();

const services = require('../services/render');
const controller=require('../controller/controller');

rout.get('/',services.homeRoutes);

rout.get('/add-user',services.add_user);


rout.get('/update-user',services.update_user);

//API

rout.post('/api/users',controller.create);
rout.get('/api/users',controller.find);
rout.put('/api/users/:id',controller.update);
rout.delete('/api/users/:id',controller.delete);

module.exports=rout