const express = require('express');

const UsersService = require('./../services/user.service');

const router = express.Router();
const service = new UsersService();

router.get('/',(req,res) => {
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

module.exports = router;
