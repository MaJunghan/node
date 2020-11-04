var http = require('http');
var fs = require('fs');
var url = require('url');
var qs = require('querystring');

function Htmltemplate(title, list, body) {
  return `
  <!doctype html>
  <html>
  <head>
  <title>WEB1 - ${title} </title>
  <meta charset="utf-8">
  </head>
  <body>
  <h1><a href="/">WEB</a></h1>
  ${list}
  <a href="/create">create</a>
  ${body}
  </body>
  </html> 
  `;
}

function Htmllist(filelist) {
  var list = '<ul>';
  var i = 0;
  while (i < filelist.length) {
    list = list + `<li><a
    href="/?id=${filelist[i]}">${filelist[i]}</a></li>`;
    i = i + 1;
  }
  list = list + '</ul>';
  return list;
}



var app = http.createServer(function (request, response) {
  var _url = request.url;
  var queryData = url.parse(_url, true).query;
  var pathname = url.parse(_url, true).pathname;

  if (pathname === '/') {
    // 사용자가 입력한 쿼리스트링 === undefind(정의되지않음)
    if (queryData.id === undefined) {
      // 쿼리스트링이 없다면 
      fs.readdir('data', function (err, filelist) {
        var title = 'Welcom';
        var description = 'Hello, Node.js';
        var list = Htmllist(filelist);
        var template = Htmltemplate(title, list, `<h2>${title}</h2>${description}`);
        response.writeHead(200);
        response.end(template);
      })
      // 받아온 쿼리스트링이있다면~~~~
    } else {
      fs.readdir('data', function (err, filelist) {
        fs.readFile(`data/${queryData.id}`, 'utf-8', function (err, description) {
          var title = queryData.id;
          var list = Htmllist(filelist);
          var template = Htmltemplate(title, list, `<h2>${title}</h2>${description}`);
          response.writeHead(200);
          response.end(template);
        });
      });
    }
  } else if (pathname === '/create') {
    fs.readdir('data', function (err, filelist) {
      var title = 'Welcom';
      var description = 'Hello, Node.js';
      var list = Htmllist(filelist);
      var template = Htmltemplate(title, list, `
      <form action="http://localhost:3000/create_process" method="post" >
      <p><input type="text" name="title" placeholder="title"></p>
      <p><textarea name="description" placeholder="description"></textarea></p>
      <p><input type="submit"></input></p> 
      </form>`); 
      response.writeHead(200);
      response.end(template);
    });
  } else if(pathname === '/create_process') {
      var body = '';
      request.on('data', data => body += data); // (data) -> data생략가능.
      request.on('end', () => {
        var post = qs.parse(body);
        var title = post.title;
        var description = post.description;
        fs.writeFile(`data/${title}`, description, 'utf8', (err) => {  // fs.writeFile 메서드로 data경로안의 title 제목과 본문을 저장 
        if(err) throw err;  // 에러가있을시 버린다
        response.writeHead(302, {Location: `/?id=${title}`}); 
        // 리다이렉션 : 다른페이지로 보내는것 302번상태로 해야함.★
        response.end('seccess'); // 파일이 만들어지면 seccess 출력
        });
    });
  } else {
    response.writeHead(404);
    response.end('not found');
  }
});
app.listen(3000);
