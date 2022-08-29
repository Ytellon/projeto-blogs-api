const express = require('express');
const routes = require('./routes');
// ...
const app = express();

app.use(express.json());

app.use('/login', routes.Login);

app.use('/user', routes.User);

app.use('/categories', routes.Category);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
