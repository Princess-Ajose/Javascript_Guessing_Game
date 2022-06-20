const http = require('http');
const fs = require('fs').promises;

const hostName = '127.0.0.1';

const port = 3000;

const server = http.createServer((req, res) => {
   if (req.url === '/home') {
      fs.readFile(`${__dirname}/index.html`).then((content) => {
         res.setHeader('content-Type', 'text/html');
         res.writeHead(200)
         res.end(content)
      }).catch((err) => {
         console.log(err)
      })
   } else if (req.url === '/') {
      fs.readFile(`${__dirname}/index.html`).then((content) => {
         res.setHeader('content-Type', 'text/html');
         res.writeHead(200)
         res.end(content)
      }).catch((err) => {
         console.log(err)
      })
   } else if (req.url === '/contact') {
      fs.readFile(`${__dirname}/contact.html`).then((content) => {
         res.setHeader('content-Type', 'text/html');
         res.writeHead(200)
         res.end(content)
      }).catch((err) => {
         console.log(err)
      })
   } else if (req.url === '/about') {
      fs.readFile(`${__dirname}/about.html`).then((content) => {
         res.setHeader('content-Type', 'text/html');
         res.writeHead(200)
         res.end(content)
      }).catch((err) => {
         console.log(err)
      })
   } 
   else {
      res.setHeader('content-Type', 'text/html');
      res.writeHead(200)
      res.end(`<h2>Not found</h2>`)
   }
   // res.statusCode = 200;


});

server.listen(port, () => {
   console.log(`Server running at https://${hostName} : ${port}`);
});


server()













/*const {}

 const http = require('http');
 const server = http.createServer((req, res) => {
 if (req.url === '/') {
 res.write('<h1>Hello, Node.js!</h1>');
 server.listen(5000);
  console.log(`The HTTP Server is running on port 5000`);

 }

});
chrome: //settings/content/siteDetails?site=http%3A%2F%2F127.0.0.1%3A5500'

const { createServer } = require('http://localhost');

const server = createServer((request, response) => {
   response.writeHead(200, {
      'content-Type': 'text/html'
   })
   response.write('<h1>Hello world!</h1>');
   return response.end();
});
server.listen(5500);

function getUser(req, res) {

   const userProfile = ""
   fetch()
}*/