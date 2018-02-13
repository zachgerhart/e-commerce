const express = require('express');
const cors = require('cors');
const { json } = require('body-parser');
const session = require('express-session');
const massive = require('massive');
const passport = require('passport');
const axios = ('axios');
const connectionString = require('../config.js').massive
//const { secret } = require('../config.js').session
//const { domain, clientID, clientSecret} = require('../config.js').Auth0
//const Auth0strategt = require('passport-auth0');

const controller = require('./controllers/controller.js');

const port = 3001
const app = express();

//Middlewares
app.use(json())
app.use(cors())


//Checking if backend is connected to frontend
// app.get('/api/test', (req, res, next) => {
//   res.status(200).json('hello from backend')
// })



massive(connectionString).then(dbInstance => app.set('db', dbInstance))
.catch(console.log)



//endpoints
app.get('/api/test', controller.getAllUsers);

app.get('/api/featured', controller.getAllFeatured);

app.get('/api/products', controller.getProducts);



app.listen(port, () => {
  console.log(`listening on da port: ${port}`);
})
