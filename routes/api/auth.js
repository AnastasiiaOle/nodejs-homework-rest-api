const express = require('express');

const { auth: ctrl } = require('../../controllers');
const { authenticate } = require('../../middlewares')

const routerAuth = express.Router();

routerAuth.post('/register', express.json(), ctrl.register);
routerAuth.post('/login', express.json(), ctrl.login);
routerAuth.post('/logout', authenticate, ctrl.logout);

module.exports = routerAuth;