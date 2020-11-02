var http = require('http');
var fs = require('fs');
var url = require('url');

function Htmltemplate(title,list,body) {
  return `
  <!doctype html>
  <html>
  <head>
  <title>WEB1 - ${title} </title>
  <meta charset="utf-8">
  </head>
  <body>
  <h1><a href="/">WEB23232</a></h1>
  ${list}
  ${body}
  </body>
  </html> 
  `;
}

function Htmllist(filelist) {
  var list = '<ul>';
  var i = 0;
  while(i < filelist.length) {
    list = list + `<li><a
    href="/?id=${filelist[i]}">${filelist[i]}</a></li>`;
    i = i + 1;
  }
  list = list + '</ul>';
  return list;
}



var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var pathname = url.parse(_url, true).pathname;

    if(pathname === '/') {
      // 사용자가 입력한 쿼리스트링 === undefind(정의되지않음)
      if(queryData.id === undefined) {
        // 쿼리스트링이 없다면 
        fs.readdir('data', function(err, filelist) {
          var title = 'Welcom';
          var description = 'Hello, Node.js';
          var list = Htmllist(filelist);
          var template = Htmltemplate(title,list, `<h2>${title}</h2>${description}`);
          response.writeHead(200);
          response.end(template);
          })
        // 받아온 쿼리스트링이있다면~~~~
        } else {
            fs.readdir('data', function(err, filelist) {
            fs.readFile(`data/${queryData.id}`, 'utf-8', function(err, description) {
              var title = queryData.id;
              var list = Htmllist(filelist);
              var template = Htmltemplate(title,list, `<h2>${title}</h2>${description}`);
              response.writeHead(200);
              response.end(template);
              });
            });
          }
        } else{
          response.writeHead(404);
          response.end('not found');
        }
    });
app.listen(4000);