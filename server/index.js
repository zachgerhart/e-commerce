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

// app.get('/api/test', function(reg, res){
//   const keys = Object.keys(req)
//   res.json(keys)
// })

massive(connectionString).then(dbInstance => app.set('db', dbInstance))
.catch(console.log)

// app.get('api/products', controller.getproducts);




app.listen(port, () => {
  console.log(`listening on da port: ${port}`);
})
