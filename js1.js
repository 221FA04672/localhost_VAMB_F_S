const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const server = http.createServer((req, res) => {
    // Parse the request URL
    const parsedUrl = url.parse(req.url, true);
    const pathname = parsedUrl.pathname; // Extract the pathname

    // If requesting the root URL ("/"), serve index.html
    if (pathname === '/') {
        let filePath = path.join(__dirname, './index.html');
        readHTML(filePath, res);
    }
    else if (pathname === '/assests/pages/about/about.html') {
        let filepath = path.join(__dirname, './about.html');
        readHTML(filepath, res);
    }
    else if (pathname === '/assests/pages/contact/cont.html') {
        let filepath = path.join(__dirname, './cont.html');
        readHTML(filepath, res);
    }
    else if (pathname === '/assests/pages/job/job.html') {
        let filepath = path.join(__dirname, './job.html');
        readHTML(filepath, res);
    }
    else if (pathname === '/assests/pages/login/login.html') {
        let filepath = path.join(__dirname, './login.html');
        readHTML(filepath, res);
    }
    else if (pathname === '/assests/pages/login/reg.html') {
        let filepath = path.join(__dirname, './reg.html');
        readHTML(filepath, res);
    }

    else if (pathname === '/assests/pages/visit/visit.html') {
        let filepath = path.join(__dirname, './visit.html');
        readHTML(filepath, res);
    }
    else if (pathname === '../../../index.html') {
        let filepath = path.join(__dirname, './home.html');
        readHTML(filepath, res);
    }
    // Handle subscription with POST
 {
        let extname = path.extname(pathname);
        let contentType = 'text/plain';

        switch (extname) {
            case '.js':
                contentType = 'text/javascript';
                break;
            case '.css':
                contentType = 'text/css';
                break;
            case '.png':
                contentType = 'image/png';
                break;
            case '.jpg':
            case '.jpeg':
                contentType = 'image/jpeg';
                break;
            case '.gif':
                contentType = 'image/gif';
                break;
            case '.svg':
                contentType = 'image/svg+xml';
                break;
            case '.ico':
                contentType = 'image/x-icon';
                break;
            default:
                contentType = 'text/plain';
        }

        // Serve the requested file
        let filePath = path.join(__dirname, pathname);
        fs.readFile(filePath, (err, content) => {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                res.end('File Not Found');
            } else {
                res.writeHead(200, { 'Content-Type': contentType });
                res.end(content, 'utf-8');
            }
        });
    }
});

// Start the server
server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});

function readHTML(filePath, res) {
    // Read and serve the HTML file
    fs.readFile(filePath, (err, content) => {
        if (err) {
            if (err.code === 'ENOENT') {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.end('404 Not Found');
            } else {
                res.writeHead(500, { 'Content-Type': 'text/html' });
                res.end(`Server Error: ${err.code}`);
            }
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(content, 'utf-8');
        }
    });
}
