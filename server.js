const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');

//url is the interface

const server = http.createServer((req, res) => { //create Server, with 2 parameters, request obj and response obj
  const page = url.parse(req.url).pathname; //see what path the user is requesting
  const params = querystring.parse(url.parse(req.url).query); //querystring parses a URL query string (str) into a collection of key and value pairs, The url.parse() method takes a URL string, parses it, and returns a URL object, and request.url requests URL string
  console.log(page); //logs the path to the console
  if (page == '/') { //if the user requests main page
    fs.readFile('index.html', function(err, data) { //send index.html
      res.writeHead(200, {'Content-Type': 'text/html'});//sends response header to the request
      res.write(data);
      res.end();//This method signals to the server that all of the response headers and body have been sent; that server should consider this message complete.
    });
  }
  else if (page == '/api') { //if user requests api page
    if('student' in params){ //if string student is in fetch url api link query parameter
        res.writeHead(200, {'Content-Type': 'application/json'});//sends response header to request
        let bot = Math.round(Math.random()* 2)
        let signs = ['scissors','paper','rock']
        const hands = {
          paper:{
          scissors : false,
          paper: 'tie',
          rock: true
          },
          rock:{
        scissors : true,
          paper: false,
          rock: 'tie'
          },
        scissors:{
        scissors: 'tie',
        paper: true,
        rock: false
          }
        }
let player = params['student']
let robot = signs[bot]
let flipResults
let results = hands[player][robot]
if(results === false){flipResults = 'You Lose!'}
else if(results === true){flipResults = 'You Win!'}
else if(results === results){flipResults = results}
        const objToJson = {
          bot: robot,
          player: player,
          flip: flipResults
        }
        res.end(JSON.stringify(objToJson));//ends response of stringified object objToJson
      }
  }//else if
  else if (page == '/css/style.css'){ //if ask for css file
    fs.readFile('css/style.css', function(err, data) { //send css file
      res.write(data);
      res.end();//ends response
    });
  }else if (page == '/js/main.js'){ //if ask for js file
    fs.readFile('js/main.js', function(err, data) { //send js file
      res.writeHead(200, {'Content-Type': 'text/javascript'});//sends what kind of file type it is
      res.write(data);
      res.end();//ends response
    });
  }
});

server.listen(8000);//local port name

//so the server.js file is basically the commands that make the server be a server. in the terminal, you set it running with the node command. in the server.js file, it has the "server.listen(8000);" line, which means when you go to localhost:8000 in the url bar of your browser, it will access the server.js file that you previously set running.

// Project Description: 
// Rock Paper Scissors

// server
// Project Description: 
// Rock Paper Scissors

// server
