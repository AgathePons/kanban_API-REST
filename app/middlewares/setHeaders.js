const setHeaders = {
  setUrl(_req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5050');
    next();
  },
  setMethods(_req, res, next) {
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    next();
  },
  setHeaders(_req, res, next) {
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    next();
  },
  setCokkies(_req, res, next) {
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
  }
};

module.exports = setHeaders;