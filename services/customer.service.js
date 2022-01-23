const boom = require('@hapi/boom');
const {models} = require('../libs/sequelize');

class CustomersService {

  constructor(){}

  async find() {
    const rta = await models.Customer.findAll({
      include: ['user']
    });
    return rta;
  }

  async findOne(id) {
    const customer = await models.Customer.findByPk(id);
    if(!customer){
      throw boom.notFound('user not found');
    }
    return customer;
  }

  async create(data){
    const newCustomer = await models.Customer.create(data, {
      include: ['user']
    });
    /*const newUser = await models.User.create(data.user);
    const newCustomer = await models.Customer.create({
      ...data,
      userId: newUser.id
    });*/
    return newCustomer;
  }

  async update(id, changes){
    const model = await this.findOne(id);
    const rta = await model.update(changes);
    return rta;
  }

  async delete(id){
    const model = await this.findOne(id);
    await model.destroy();
    return id;
  }

}

module.exports = CustomersService;
