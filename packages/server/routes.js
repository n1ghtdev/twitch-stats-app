const routes = require('next-routes');

module.exports = routes()
  .add('index', '/')
  .add('user', '/user/:username', 'user');
