const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet')

const server = http.createServer((req, res) => {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log(page);
  if (page == '/') {
    fs.readFile('home/index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
  else if (page == '/home/style.css'){
    fs.readFile('home/style.css', function(err, data) {
      res.write(data);
      res.end();
    });
  }else if (page == '/www.twitter.com/ACole893'){
      res.writeHead(301,
        {Location: 'https://twitter.com/ACole893'+newRoom});
      res.end();
    }
  else if (page == '/space') {
    fs.readFile('space/index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
  else if (page == '/space/style.css'){
    fs.readFile('space/style.css', function(err, data) {
      res.write(data);
      res.end();
    });
  }else if (page == '/space/script.js'){
    fs.readFile('space/script.js', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });
  }


  else if (page == '/beauty') {
    fs.readFile('beauty/index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
  else if (page == '/beauty/beauty-style.css'){
    fs.readFile('beauty/beauty-style.css', function(err, data) {
      res.write(data);
      res.end();
    });
  }else if (page == '/beauty/beauty.js'){
    fs.readFile('beauty/beauty.js', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });
  }else if (page == '/beauty/assets/new-instagram-logo-white-border-icon-png-large.png'){
    fs.readFile('beauty/assets/new-instagram-logo-white-border-icon-png-large.png', function(err, data) {
      res.writeHead(200, {'Content-Type': 'image/jpg'});
      res.write(data);
      res.end();
    });
  }else if (page == '/beauty/assets/service1.png'){
    fs.readFile('beauty/assets/service1.png', function(err, data) {
      res.writeHead(200, {'Content-Type': 'image/png'});
      res.write(data);
      res.end();
    });
  }else if (page == '/beauty/assets/service2.png'){
    fs.readFile('beauty/assets/service2.png', function(err, data) {
      res.writeHead(200, {'Content-Type': 'image/png'});
      res.write(data);
      res.end();
    });
  }else if (page == '/beauty/assets/service3.png'){
    fs.readFile('beauty/assets/service3.png', function(err, data) {
      res.writeHead(200, {'Content-Type': 'image/png'});
      res.write(data);
      res.end();
    });
  }else if (page == '/beauty/assets/beauty8.jpg'){
    fs.readFile('beauty/assets/beauty8.jpg', function(err, data) {
      res.writeHead(200, {'Content-Type': 'image/png'});
      res.write(data);
      res.end();
    });
  }else if (page == '/beauty/assets/beauty2.jpg'){
    fs.readFile('beauty/assets/beauty2.jpg', function(err, data) {
      res.writeHead(200, {'Content-Type': 'image/png'});
      res.write(data);
      res.end();
    });
  }else if (page == '/beauty/assets/Header_BG_image.jpg'){
    fs.readFile('beauty/assets/Header_BG_image.jpg', function(err, data) {
      res.writeHead(200, {'Content-Type': 'image/jpg'});
      res.write(data);
      res.end();
    });
  }else if (page == '/beauty/assets/beauty3.jpg'){
    fs.readFile('beauty/assets/beauty3.jpg', function(err, data) {
      res.writeHead(200, {'Content-Type': 'image/jpg'});
      res.write(data);
      res.end();
    });
  }
  else if (page == '/beauty/assets/beauty5.jpg'){
    fs.readFile('beauty/assets/beauty5.jpg', function(err, data) {
      res.writeHead(200, {'Content-Type': 'image/jpg'});
      res.write(data);
      res.end();
    });
  }else if (page == '/beauty/assets/beauty1.jpg'){
    fs.readFile('beauty/assets/beauty1.jpg', function(err, data) {
      res.writeHead(200, {'Content-Type': 'image/jpg'});
      res.write(data);
      res.end();
    });
  }else if (page == '/beauty/assets/beauty7.jpg'){
    fs.readFile('beauty/assets/beauty7.jpg', function(err, data) {
      res.writeHead(200, {'Content-Type': 'image/jpg'});
      res.write(data);
      res.end();
    });
  }else if (page == '/beauty/assets/beauty13.jpg'){
    fs.readFile('beauty/assets/beauty13.jpg', function(err, data) {
      res.writeHead(200, {'Content-Type': 'image/jpg'});
      res.write(data);
      res.end();
    });
  }else if (page == '/beauty/assets/beauty4.jpg'){
    fs.readFile('beauty/assets/beauty4.jpg', function(err, data) {
      res.writeHead(200, {'Content-Type': 'image/jpg'});
      res.write(data);
      res.end();
    });
  }else if (page == '/beauty/assets/beauty12.jpg'){
    fs.readFile('beauty/assets/beauty12.jpg', function(err, data) {
      res.writeHead(200, {'Content-Type': 'image/jpg'});
      res.write(data);
      res.end();
    });
  }else if (page == '/beauty/assets/f_logo_RGB-White_144.png'){
    fs.readFile('beauty/assets/f_logo_RGB-White_144.png', function(err, data) {
      res.writeHead(200, {'Content-Type': 'image/jpg'});
      res.write(data);
      res.end();
    });
  }else if (page == '/beauty/assets/twitter-logo.png'){
    fs.readFile('beauty/assets/twitter-logo.png', function(err, data) {
      res.writeHead(200, {'Content-Type': 'image/jpg'});
      res.write(data);
      res.end();
    });
  }else if (page == '/https://acolee.netlify.app/'){
    res.writeHead(301,
      {Location: 'https://acolee.netlify.app/'+newRoom});
    res.end();
  }


  // else if (page == '/otherpage') {
  //   fs.readFile('otherpage.html', function(err, data) {
  //     res.writeHead(200, {'Content-Type': 'text/html'});
  //     res.write(data);
  //     res.end();
  //   });
  // }
  // else if (page == '/otherotherpage') {
  //   fs.readFile('otherotherpage.html', function(err, data) {
  //     res.writeHead(200, {'Content-Type': 'text/html'});
  //     res.write(data);
  //     res.end();
  //   });
  // }
  // else if (page == '/api') {
  //   if('student' in params){
  //     if(params['student']== 'leon'){
  //       res.writeHead(200, {'Content-Type': 'application/json'});
  //       const objToJson = {
  //         name: "leon",
  //         status: "Boss Man",
  //         currentOccupation: "Baller"
  //       }
  //       res.end(JSON.stringify(objToJson));
  //     }//student = leon
  //     else if(params['student'] != 'leon'){
  //       res.writeHead(200, {'Content-Type': 'application/json'});
  //       const objToJson = {
  //         name: "unknown",
  //         status: "unknown",
  //         currentOccupation: "unknown"
  //       }
  //       res.end(JSON.stringify(objToJson));
  //     }//student != leon
  //   }//student if
  // }//else if
  // else if (page == '/css/style.css'){
  //   fs.readFile('css/style.css', function(err, data) {
  //     res.write(data);
  //     res.end();
  //   });
  // }else if (page == '/js/main.js'){
  //   fs.readFile('js/main.js', function(err, data) {
  //     res.writeHead(200, {'Content-Type': 'text/javascript'});
  //     res.write(data);
  //     res.end();
  //   });
  else{
    figlet('404!!', function(err, data) {
      if (err) {
          console.log('Something went wrong...');
          console.dir(err);
          return;
      }
      res.write(data);
      res.end();
    });
  }
});
const PORT = process.env.PORT || 8000;
server.listen(PORT, function(){
  console.log('Chat server running')
});
