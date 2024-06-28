const express = require('express');
const { getRouteController, postRouteController } = require('../controller/controller-postRoute');
const route = express.Router();

route.get('/', getRouteController)
route.post('/', postRouteController)

module.exports = route