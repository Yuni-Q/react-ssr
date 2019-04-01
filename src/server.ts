import * as express from 'express';
import * as fs from 'fs';
import * as http from 'http';
import * as path from 'path';

import * as React from 'react';
import * as ReactDOMServer from 'react-dom/server';

import App from './App';

const app = express();

const server = http.createServer(app);

const staticFiles = [
    '/static/*',
    '/asset-manifest.json',
    '/manifest.json',
    '/service-worker.js',
    '/favicon.ico',
    '/logo.svg'
];

staticFiles.forEach(file => {
    app.get(file, (req, res) => {
        const filePath = path.join(__dirname, '../build', req.url);
        res.sendFile(filePath);
    });
});

app.get('*', (req, res) => {
    const html = path.join(__dirname, '../build/index.html');
    const htmlData = fs.readFileSync(html).toString();

    const ReactApp = ReactDOMServer.renderToString(React.createElement(App, {}, req.url));
    const renderedHtml = htmlData.replace('<div id="root">{{SSR}}</div>', `<div id="root">${ReactApp}</div><script id="initial-data" type="text/plain" data-json="${req.url}"></script>`);
    res.status(200).send(renderedHtml);
});

server.listen(3000);