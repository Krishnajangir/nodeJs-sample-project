const http = require('http');
const fs = require('fs');
//if not node's tag then will use as npm run start-server otherwise npm start
const server = http.createServer((req, res) => {
   const url = req.url;
   console.log('hiii')
   const method = req.method;
   if (url === '/') {
      res.write('<html>')
      res.write('<head><title>This is routing process</title></head>')
      res.write(`<body>Hi Welcome to programming world.Please fill the below fform for furthur work.
      <form action="/create-user" method="POST">
         <input type="text" placeholder="UserName" name="user"/>
         <button type="submit">Submit</button>
         </form>
      </body>`)
      res.write('</html>');
      res.end();
   } else if (url === '/users') {
      res.write('<html>')
      res.write('<head><title>This is routing process</title></head>')
      res.write('<body><ul><li>User1</li><li>User2</li></ul></body>')
      res.write('</html>');
      res.end();
   }
   else if (url === '/create-user' && method === 'POST') {
      const body = [];
      req.on('data', (chunk) => {
         body.push(chunk);
      });
      req.on('end', () => {
         const parsedBody = Buffer.concat(body).toString();
         // fs.writeFileSync('user.txt' , parsedBody.split('=')[1])
         res.write('<html>');
         res.write('<head><title>This is routing process</title></head>')
         res.write(`<body>User is created successfully and ${parsedBody}</body>`)
         res.write('</html>');
         return res.end()
      })

   }
});

server.listen(3000);