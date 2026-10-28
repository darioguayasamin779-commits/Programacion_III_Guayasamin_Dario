// server.mjs
import { createServer } from 'node:http';

const server = createServer((req, res) => {
    if (req.url ==='/'){
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello World!\n');
    }
    else if (req.url === '/contacto') {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end('<h1>Contacto</h1><p>Esta es la página de contacto.</p>');
    }
    else {
        res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end('<h1>Not Found</h1><p>The page you are looking for does not exist.</p>');
    }
});

server.listen(3000, '127.0.0.1', () => {
    console.log('Listening on 127.0.0.1:3000');
});
