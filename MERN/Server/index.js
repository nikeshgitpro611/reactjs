const express = require('express');
const mongoose = require('mongoose')
const app = express();
const dotenv = require('dotenv');
dotenv.config()


//db connection....
const start = () => {
    try {
        mongoose.connect(process.env.MERN_URL);
        app.listen(3000, () => console.log('Server connected...!!'))

    } catch (error) {
        console.log("Error : ", error.message);
    }
};
start();

// mongoose.connect(process.env.MERN_URL).then(() => console.log('Mongoes Connected..!')).catch(err => console.log(err.message))

