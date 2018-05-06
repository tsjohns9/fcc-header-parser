const path = require('path');
const convertTime = require('../js/app');

module.exports = function(app) {
  app.get('/', function(req, res) {
    res.redirect('/api/whoami');
  });

  app.get('/api/whoami', function(req, res) {
    const matchOS = /\((.*?)\)/gm;
    const user = {
      remoteAddress: req.connection.remoteAddress,
      operatingSystem: matchOS.exec(req.headers['user-agent'])[1],
      language: req.headers['accept-language'].split(',')[0]
    };
    res.json(user);
  });
};
