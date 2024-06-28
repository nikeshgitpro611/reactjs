const express = require('express');
const HttpError =  require('../modal/http-error')
const route = express.Router();
const {getPlaceById, getPlaceByUserId, creatPlace, showAllData, updatePlace, deletePlace} = require('../controller/place-controller')


route.get('/', showAllData)
route.get('/:pid', getPlaceById);
route.use('/user/:uid', getPlaceByUserId);

//particular Changes
route.patch('/:pid', updatePlace)
route.delete('/:pid', deletePlace)

//Post

route.post('/', creatPlace)



module.exports = route