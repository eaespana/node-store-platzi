const Joi = require('joi');

const id = Joi.string().uuid();

const getUsersSchema = Joi.object({
  id: id.required()
});

module.exports = {getUsersSchema}
