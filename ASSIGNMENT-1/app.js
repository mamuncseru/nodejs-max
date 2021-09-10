const http = require('http');

const server = http.createServer((req, res) => {

    const url = req.url;
    const method = req.method;
    
    if (url === '/') {

        res.write('<html>')
        res.write('<body><h1>Greetings from localhost</h1></br><form action="/create-user" method="POST"><label>username</label><input type="text" name="createUser"/><button type="submit">submit</button></form></body>')
        res.write('</html>');
        return res.end();
    }

    if (url === '/users') {
        res.write('<html>')
        res.write('<body><ul><li>User 1</li><li>User 2</li> <li>User 3</li></ul></body>')
        res.write('</html>');
        return res.end();
    }
    

    if (url === '/create-user', method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });

        req.on('end', () => {
            const parseBody = Buffer.concat(body).toString();
            console.log(parseBody);
            const newUser = parseBody.split("=")[1];
            console.log(newUser);
            res.statusCode= 302;
            res.setHeader('Location', '/');
            return res.end();
        });
    }


});

server.listen(3000);