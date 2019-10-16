'use strict'

const express = require('express')

const productStore = require('./model')
const ProductController = require('./controller')

const controller = new ProductController(productStore)

function setupRouter () {
  let router = express.Router()

  router.get('/', controller.getData.bind(controller))
  router.get('/', controller.createData.bind(controller))
  router.get('/:id', controller.editData.bind(controller))
  router.get('/:id', controller.deleteData.bind(controller))

  return router
}

module.exports = function (app) {
  let router = app || express()

  router.use(setupRouter())

  return router
}
