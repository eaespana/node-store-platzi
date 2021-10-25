const express = require('express');

const CategoriesService = require('./../services/categories.service');
const validateHandler = require('./../middlewares/validator.handler');
const {getCategoriesSchema} = require('./../schemas/categories.schemas');

const router = express.Router();
const service = new CategoriesService();

router.get('/',
  async (req,res) =>{
    const categories = await service.find();
    res.json(categories);
});

router.get('/:idCategoria/productos/:idProducto',
  validateHandler(getCategoriesSchema,'params'),
  async (req,res) =>{
  const { idCategoria } = req.params;
  const { idProducto } = req.params;
  const categories = await service.findOne(idCategoria);
  console.log(idProducto);
  res.json({
      categories,
      idProducto
    }
  );
});

module.exports = router;
