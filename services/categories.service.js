const faker = require('faker');

class CategoriesService {

  constructor(){
    this.categories = [];
    this.generate();
  }


  generate() {
    const limit = 100;
    for (let index = 0; index < limit; index++) {
        this.categories.push({
        idCategoria: faker.datatype.uuid(),
        idProducto: faker.datatype.uuid(),
        nameCategoria: faker.commerce.productAdjective()
      });
    }
  }

  create(){

  }

  find() {
    return this.categories;
  }

  findOne(idCategoria) {
    return this.categories.find(item => item.idCategoria === idCategoria);
  }

  update(){

  }

  delete(){

  }

}

module.exports = CategoriesService;
