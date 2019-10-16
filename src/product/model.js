class ProductModel {
  constructor () {}
  async find (query, option) {
    return [
      {
        _id: 1,
        name: 'iPad',
        price: 12300
      },
      {
        _id: 2,
        name: 'iPhone 19',
        price: 923000
      },
      {
        _id: 3,
        name: 'iPhone 19 Plus',
        price: 1923000
      }
    ]
  }
  async insert () {
    return {}
  }
  async update () {
    return {
      _id: 1,
      name: 'iPad',
      price: 12300
    }
  }
  async delete () {
    return {
      _id: 1,
      name: 'iPad',
      price: 12300
    }
  }
}

module.exports = new ProductModel()