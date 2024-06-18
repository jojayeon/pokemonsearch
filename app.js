// GPT를 사용해서 만들어지는지 궁금해서 실험하면서 만들수 있는 부분까지만 쓰여있는지 확인하면서 작업하였다.


const http = require('http');
const fs = require('fs');
const path = require('path');
const nc = require('./pokemonsearch');

const PORT = 8080;

const server = http.createServer(async (req, res) => {
    if (req.method === 'GET' && req.url === '/') {
        const filePath = path.join(__dirname, 'public', 'index.html');
        fs.readFile(filePath, (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Internal Server Error');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
    } else if (req.method === 'POST' && req.url === '/submit') {
      let body = '';
      req.on('data', chunk => {
          body += chunk.toString();
      });

      req.on('end', async () => {
          const decodedBody = decodeURIComponent(body);
          const titleValue = decodedBody.split('=')[1];
          //원하는 포켓몬 검색하는 부분
          try {
            const result = await nc(titleValue)
                res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });
                res.end(`
                    <!DOCTYPE html>
                    <html lang="en">
                    <head>
                      <meta charset="UTF-8">
                      <meta name="viewport" content="width=device-width, initial-scale=1.0">
                      <title>포켓몬 검색 결과</title>
                    </head>
                    <body>
                      <div id="root">
                        <h1>포켓몬 검색 결과</h1>
                        <div>
                          <p>Name: ${result}</p>
                        </div>
                        <a href="/">다시 검색하기</a>
                      </div>
                    </body>
                    </html>
                `);
            } catch (err) {
              err.message
            }
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


