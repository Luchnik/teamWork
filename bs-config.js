// browser synch settings.
const proxyMiddleware = require('http-proxy-middleware');
const proxyUrl = 'http://localhost:9876';

module.exports = {
  ghostMode: false,
  server: {
    middleware: [proxyMiddleware('/api', {
      target: proxyUrl
    })]
  }
};