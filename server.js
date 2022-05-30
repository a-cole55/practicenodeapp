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
  }
  else if (page == '/www.twitter.com/ACole893'){
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
    fs.readFile('glamourb/index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
  else if (page == '/glamourb/style.css'){
    fs.readFile('glamourb/style.css', function(err, data) {
      res.write(data);
      res.end();
    });
  }else if (page == '/glamourb/main.js'){
    fs.readFile('glamourb/main.js', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });
  }else if (page == '/glamourb/assets/new-instagram-logo-white-border-icon-png-large.png'){
    fs.readFile('glamourb/assets/new-instagram-logo-white-border-icon-png-large.png', function(err, data) {
      res.writeHead(200, {'Content-Type': 'image/png'});
      res.write(data);
      res.end();
    });
  }else if (page == '/glamourb/assets/service1.png'){
    fs.readFile('glamourb/assets/service1.png', function(err, data) {
      res.writeHead(200, {'Content-Type': 'image/png'});
      res.write(data);
      res.end();
    });
  }else if (page == '/glamourb/assets/service2.png'){
    fs.readFile('glamourb/assets/service2.png', function(err, data) {
      res.writeHead(200, {'Content-Type': 'image/png'});
      res.write(data);
      res.end();
    });
  }else if (page == '/glamourb/assets/service3.png'){
    fs.readFile('glamourb/assets/service3.png', function(err, data) {
      res.writeHead(200, {'Content-Type': 'image/png'});
      res.write(data);
      res.end();
    });
  }else if (page == '/glamourb/assets/beauty8.jpg'){
    fs.readFile('glamourb/assets/beauty8.jpg', function(err, data) {
      res.writeHead(200, {'Content-Type': 'image/png'});
      res.write(data);
      res.end();
    });
  }else if (page == '/glamourb/assets/beauty2.jpg'){
    fs.readFile('glamourb/assets/beauty2.jpg', function(err, data) {
      res.writeHead(200, {'Content-Type': 'image/png'});
      res.write(data);
      res.end();
    });
  }else if (page == '/glamourb/assets/Header_BG_image.jpg'){
    fs.readFile('glamourb/assets/Header_BG_image.jpg', function(err, data) {
      res.writeHead(200, {'Content-Type': 'image/jpg'});
      res.write(data);
      res.end();
    });
  }else if (page == '/glamourb/assets/beauty3.jpg'){
    fs.readFile('glamourb/assets/beauty3.jpg', function(err, data) {
      res.writeHead(200, {'Content-Type': 'image/jpg'});
      res.write(data);
      res.end();
    });
  }
  else if (page == '/glamourb/assets/beauty5.jpg'){
    fs.readFile('glamourb/assets/beauty5.jpg', function(err, data) {
      res.writeHead(200, {'Content-Type': 'image/jpg'});
      res.write(data);
      res.end();
    });
  }else if (page == '/glamourb/assets/beauty1.jpg'){
    fs.readFile('glamourb/assets/beauty1.jpg', function(err, data) {
      res.writeHead(200, {'Content-Type': 'image/jpg'});
      res.write(data);
      res.end();
    });
  }else if (page == '/glamourb/assets/beauty7.jpg'){
    fs.readFile('glamourb/assets/beauty7.jpg', function(err, data) {
      res.writeHead(200, {'Content-Type': 'image/jpg'});
      res.write(data);
      res.end();
    });
  }else if (page == '/glamourb/assets/beauty13.jpg'){
    fs.readFile('glamourb/assets/beauty13.jpg', function(err, data) {
      res.writeHead(200, {'Content-Type': 'image/jpg'});
      res.write(data);
      res.end();
    });
  }else if (page == '/glamourb/assets/beauty4.jpg'){
    fs.readFile('glamourb/assets/beauty4.jpg', function(err, data) {
      res.writeHead(200, {'Content-Type': 'image/jpg'});
      res.write(data);
      res.end();
    });
  }else if (page == '/glamourb/assets/beauty12.jpg'){
    fs.readFile('glamourb/assets/beauty12.jpg', function(err, data) {
      res.writeHead(200, {'Content-Type': 'image/jpg'});
      res.write(data);
      res.end();
    });
  }else if (page == '/glamourb/assets/f_logo_RGB-White_144.png'){
    fs.readFile('glamourb/assets/f_logo_RGB-White_144.png', function(err, data) {
      res.writeHead(200, {'Content-Type': 'image/png'});
      res.write(data);
      res.end();
    });
  }else if (page == '/glamourb/assets/twitter-logo.png'){
    fs.readFile('glamourb/assets/twitter-logo.png', function(err, data) {
      res.writeHead(200, {'Content-Type': 'image/png'});
      res.write(data);
      res.end();
    });
  }
  else if (page == '/https://acolee.netlify.app/'){
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
server.listen(process.env.PORT || 5000, function(){
  console.log('Chat server running')
});
