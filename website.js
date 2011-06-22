var connect = require('connect');
connect.createServer(
  connect.logger(),
  connect.staticProvider()
).listen(8000);