const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const colors = require('colors');
const connectDb = require('./config/connectDb');

dotenv.config();
connectDb();
const app = express();

// middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

// user routes
app.use('/api/v1/users', require('./routes/userRoute'));

// transaction routes
app.use('/api/v1/transections', require('./routes/transactionRoutes'));


// static files
app.use(express.static(path.join(__dirname, './client/build')));

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, './client/build/index.html'));
});

//port
const PORT = 8080 || process.env.PORT;

//listen server
app.listen(PORT, (err, res) => {
    if (err) {
        console.log(err);
    }else{
        console.log(`Server is running on port ${PORT}`.blue);
    }
});