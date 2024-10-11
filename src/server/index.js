import express from "express";
import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import App from "../components/app";
import {Writable} from 'stream';
import path from "path";
import fs from "fs";

const app = express();

const port = process.env.PORT || 3000;

const FILES = /\.(js|js.map|woff|woff2|svg|bmp|jpg|jpeg|gif|png|ico|css)(\?v=\d+\.\d+\.\d+)?$/;

class HtmlWritable extends Writable {
    chunks = [];
    html = '';

    getHtml() {
        return this.html;
    }

    _write(chunk, encoding, callback) {
        this.chunks.push(chunk);
        callback();
    }

    _final(callback) {
        this.html = Buffer.concat(this.chunks).toString();
        callback();
    }
}

app.get("/*", (req, res) => {
    if (FILES.test(req.path)) {
        let filePath = path.join(__dirname, req.path);
        res.download(filePath);
        return;
    }

    const writable = new HtmlWritable();
    const stream = ReactDOMServer.renderToPipeableStream(
        <StaticRouter location={req.url}>
            <App />
        </StaticRouter>,
        {
            onShellReady() {
                res.setHeader('Content-type', 'text/html');
                stream.pipe(writable);
            },
            onShellError(error) {
                res.statusCode = 500;
                res.setHeader('content-type', 'text/html');
                res.send(`<h1>Something went wrong</h1><div>${error}</div>`);
            },
        }
    );

    writable.on('finish', () => {
        const renderedHtml = writable.getHtml();
        const baseHtml = fs.readFileSync(path.resolve(__dirname, "index.html"), 'utf8')

        res.send(baseHtml.replace('<div id="root"></div>', `<div id="root">${renderedHtml}</div>`)); // In an express js context
    });
});

app.listen(port, () => {
    console.log(`Express server running at http://localhost:${port}/`);
});