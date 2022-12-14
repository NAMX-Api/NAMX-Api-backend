const express = require('express');
const AppError = require('./middleware/appError')
const path = require('path');
const cors = require('cors');
const corsOptions = require('./config/corsOptions');
const { logger } = require('./middleware/logEvents');
const errorHandler = require('./middleware/errorHandler');
const verifyJWT = require('./middleware/verifyJWT');
const verifyRefresh = require('./middleware/verifyRefresh');
const cookieParser = require('cookie-parser');
const credentials = require('./middleware/credentials');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3600;
const app = express();
// custom middleware logger
app.use(logger);
app.use(errorHandler);

// Handle options credentials check - before CORS!
// and fetch cookies credentials requirement
app.use(credentials);

// Cross Origin Resource Sharing
app.use(cors(corsOptions));

// built-in middleware to handle urlencoded form data
app.use(express.urlencoded({ extended: false }));

// built-in middleware for json 
app.use(express.json());

//middleware for cookies
app.use(cookieParser());

//serve static files
// app.use('/', express.static(path.join(__dirname, '/public')));

// routes
app.use('/register', require('./routes/register'));
app.use('/auth', require('./routes/auth'), require('./routes/admin'));
app.use('/refresh', require('./routes/refresh'));
app.use('/logout', require('./routes/logout'));

(app.use(verifyJWT))?app.use(verifyJWT):app.use(verifyRefresh)
app.use('/employees', require('./routes/api/employees'));
app.use('/cars', require('./routes/api/cars.js'));
app.use('/users', require('./routes/api/users'));
app.use('/order', require('./routes/api/orders'));

// app.all('*', (req, res) => {
//     res.status(404);
//     if (req.accepts('html')) {
//         res.sendFile(path.join(__dirname, 'views', '404.html'));
//     } else if (req.accepts('json')) {
//         res.json({ "error": "404 Not Found" });
//     } else {
//         res.type('txt').send("404 Not Found");
//     }
// });



//Connect to db
mongoose.connect(
    process.env.MONGODB_URI,{ useNewUrlParser: true }, () => 
        console.log('connected to db')
);


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));