const Joi = require('joi');

const idCategoria = Joi.string().uuid();
const idProducto = Joi.string().uuid();

const getCategoriesSchema = Joi.object({
  idCategoria: idCategoria.required(),
  idProducto: idProducto.required()
});

module.exports = {getCategoriesSchema}
