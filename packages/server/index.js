const express = require('express');
const next = require('next');
const path = require('path');

const PORT = process.env.PORT || 3000;
const isDev = process.env.NODE_ENV !== 'production';
const app = next({ isDev });

const routes = require('./routes');
const handler = routes.getRequestHandler(app);

app.prepare().then(() => {
  const server = express();

  server.use(express.static(path.join(__dirname, '../static')));

  server.get('*', async (req, res) => handler(req, res));

  server.listen(PORT, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${PORT}`);
  });
});
