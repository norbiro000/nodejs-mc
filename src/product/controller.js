'use strict'

class ProductController {
  constructor (store) {
    this.store = store
  }

  async getData (req, res, next) {
    try {
      let response = await this.store.find({/** QUERY */})
      res.status(200).send(response)
    } catch (e) {
      console.log(e)
      res.status(500).send({message: 'Internal server error.'})
    }
  }

  async createData (req, res, next) {
    try {
      let response = await this.store.insert({/** body */})
      res.status(201).send(response)
    } catch (e) {
      console.log(e)
      res.status(500).send({message: 'Internal server error.'})
    }
  }

  async editData (req, res, next) {
    try {
      let { id } = req.params
      let body = req.body
      
      let response = await this.store.update(id, body)
      res.status(204).send(response)

    } catch (e) {
      console.log(e)
      res.status(500).send({message: 'Internal server error.'})
    }
  }

  async deleteData (req, res, next) {
    try {
      let { id } = req.params
      await this.store.delete(id)
      res.status(204).send()
    } catch (e) {
      console.log(e)
      res.status(500).send({message: 'Internal server error.'})
    }
  }
}

module.exports = ProductController
