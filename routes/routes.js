module.exports = function(app) {
  app.get('/', function(req, res) {
    res.redirect('/api/whoami');
  });

  app.get('/api/whoami', function(req, res) {
    const matchOS = /\((.*?)\)/gm;
    console.log(req.headers);
    const user = {
      ip: req.header('x-forwarded-for') || req.connection.remoteAddress,
      operatingSystem: matchOS.exec(req.headers['user-agent'])[1],
      language: req.headers['accept-language'].split(',')[0]
    };
    res.json(user);
  });
};
