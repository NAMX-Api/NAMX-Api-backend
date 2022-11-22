const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const serveIndex = require('serve-index');
const mongoose = require('mongoose');
const cors = require('cors');
const port = 3000;


//BodyParser to use req.body
app.use(bodyParser.json());

//Middlewares
app.use(cors());


app.use('/public', express.static('public'));
app.use('/public', serveIndex('public'));

//Import Routes
const Route = require('./public/routes/route');
app.use('/api/v1/namx/', Route);


//Connect to db
mongoose.connect(
    process.env.MONGODB_URI,{ useNewUrlParser: true }, () => 
    console.log('connected to db')
);


//Port
app.listen(port, () => console.log('Namx-Api app is listening on port 3000.'));