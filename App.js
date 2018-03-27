var http = require('http');
var fs = require('fs');
var port = 3000;

var requestHandler = (request, response) => {
  fs.writeFile('hello-world.txt', 'Hello to this great world', (err) => {
    if (err) {
      return console.log(`You have an error:  ${err}`);
    }
    console.log('Saved!')
  });
};

var server = http.createServer(requestHandler());

server.listen(port, (err) => {
  if (err) {
    return console.log(`You have an error:  ${err}`);
  }

  console.log(`server is listening on ${port}`);
});
