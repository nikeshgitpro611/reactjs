const express =  require('express');
const bodyParse = require('body-parser');
const postRoutes =  require('../TASK/roure/postRoutes')
const app =  express();


app.use(bodyParse.json());

app.use('/api/post', postRoutes);

app.listen(3001,()=>console.log('Server Connected......'))
