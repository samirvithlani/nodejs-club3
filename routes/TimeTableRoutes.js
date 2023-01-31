const routes = require('express').Router();
const { addPerDayTimeTable } = require('../controller/TimtableController');
routes.post('/addPerDayTimeTable', addPerDayTimeTable);
module.exports = routes;