const express = require('express');

const UsersService = require('./../services/user.service');
const validateHandler = require('./../middlewares/validator.handler');
const {getUsersSchema} = require('./../schemas/users.shemas');

const router = express.Router();
const service = new UsersService();

router.get('/',
  (req,res) => {
    const {limit,offset} =req.query;
    const users = service.find();

    if(limit && offset){
      res.json({
        users,
        limit,
        offset
      });
    }else{
      res.send('No hay parametros.');
    }
});

router.get('/:id',
  validateHandler(getUsersSchema,'params'),
  (req,res) => {
    const { id } = req.params;
    const users = service.findOne(id);
    res.json({
      users
    });
});

module.exports = router;
