const express = require('express');
const bodyParser = require('body-parser');
const placesRoute = require('./routes/places-route');
const HttpError = require('./modal/http-error');
const app = express();

app.use(bodyParser.json())
app.use('/api/places', placesRoute);

//Error Handling for Un -expected routes
app.use((req, res, next) => {
    // const error = HttpError('could not found th route', 404)
    return next(new HttpError('could not found th route', 404))
})

//Globaly Error Handling 
app.use((error, req, res, next) => {
    
    if (res.headerSent) {
        return next(error)
    }
    res.status(error.code || 500);
    res.json({ message: error.message || 'An Error Occure..' })
})

app.listen(5000, () => console.log('Server Connected......!!!'))