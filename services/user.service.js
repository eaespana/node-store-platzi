const faker = require('faker');

class UsersService {

  constructor(){
    this.users = [];
    this.generate();
  }


  generate() {
    const limit = 100;
    for (let index = 0; index < limit; index++) {
        this.users.push({
        id: faker.datatype.uuid(),
        name: faker.name.findName(),
        correo: faker.internet.email()
      });
    }
  }

  create(){

  }

  find() {
    return this.users;
  }

  findOne(id) {
    return this.users.find(item => item.id === id);
  }

  update(){

  }

  delete(){

  }

}

module.exports = UsersService;
