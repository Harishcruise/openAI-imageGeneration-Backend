const express = require("express")
const formData = require('express-form-data');
var bodyParser = require('body-parser')
var cors = require('cors'); 
require('dotenv').config()
const router = require('./routes')

app = express();
app.use(cors());

const corsOpts = {
    origin: '*',
  
    methods: [
      'GET',
      'POST',
      'PUT',
      'DELETE'
    ],
  
    allowedHeaders: [
      'Content-Type',
    ],
  };
  
  // Init Middleware
  app.use(bodyParser.json({limit: '50mb'}))
  app.use(express.json({ extended: false }))
  app.use(express.urlencoded({ extended: true }));
  app.use(formData.parse())
  app.use('/_api',router)

  const PORT = process.env.PORT || 5000;


app.listen(PORT, () => console.group(`  Server Started On ${PORT} `));