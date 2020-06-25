const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const employeesRoutes = require('./routes/employees');

const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin,X-Requested-With,Content-Type,Accept'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET,POST,PUT,PATCH,DELETE,OPTIONS'
  );
  next();
});
//connecting to the mongodb config
mongoose.connect('mongodb+srv://arun_menon:' + process.env.ATLAS_MONGO_PWD_RBC + '@cluster0-fl9yj.mongodb.net/node-employees?retryWrites=true&w=majority'
  , { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Database Connected!!');
  })
  .catch(() => {
    console.log('Database Connection Failed!!!!');
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/employees', employeesRoutes);

module.exports = app;