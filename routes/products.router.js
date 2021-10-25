const express = require('express');

const ProductsService = require('./../services/product.service');
const validateHandler = require('./../middlewares/validator.handler');
const {createProductSchema,updateProductSchema,getProductSchema} = require('./../schemas/product.schemas');

const router = express.Router();
const service = new ProductsService();

router.get('/',
  async (req,res) =>{
    const products = await service.find();
    res.json(products);
});

router.get('/:id',
  validateHandler(getProductSchema,'params'),
  async (req,res, next) =>{
    try {
      const { id } = req.params;
      const product = await service.findOne(id);
      res.json(product);
    }catch(error) {
      next(error);
    }
});

router.post('/',
  validateHandler(createProductSchema,'body'),
  async (req,res) => {
    const body = req.body;
    const newProduct = await service.create(body);
    res.status(201).json(newProduct);
});

router.put('/:id',(req,res) => {
  const {id} = req.params;
  const body = req.body;
  res.json({
    message: 'update put',
    data: body,
    id: id
  });
});

router.patch('/:id',
  validateHandler(getProductSchema,'params'),
  validateHandler(updateProductSchema,'body'),
  async (req,res,next) => {
    try {
      const {id} = req.params;
      const body = req.body;
      const product = await service.update(id, body);
      res.json({
        message: 'update patch',
        data: body,
        id: product,
    });
    } catch (error) {
        next(error);
        /*res.status(404).json({
          message: error.message
        });*/
    }
});

router.delete('/:id', async (req,res) => {
  const {id} = req.params;
  const product = await service.delete(id);
  res.json({
    message: 'delete patch',
    id: product
  });
});

module.exports = router;
