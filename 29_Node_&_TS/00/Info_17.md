To enable HTTP/2 on an Express.js backend and React frontend:

### Express.js Backend

1. Use Node.js’s `http2` module or a popular library like `spdy` or `http2-express-bridge` since Express doesn’t natively
   support HTTP/2.
2. Set up HTTPS as HTTP/2 requires TLS.
3. Example with `spdy`:

   - Install: `npm install spdy express`
   - Create `key.pem` and `cert.pem` SSL certificates.
   - Use this code to start an HTTP/2 server:

     ```js
     const fs = require("fs");
     const spdy = require("spdy");
     const express = require("express");

     const app = express();
     app.get("/", (req, res) => res.send("Hello world over HTTP/2"));

     const options = {
       key: fs.readFileSync("key.pem"),
       cert: fs.readFileSync("cert.pem"),
     };

     spdy.createServer(options, app).listen(8443, () => {
       console.log("HTTP/2 server running on https://localhost:8443");
     });
     ```

4. Alternatively, `http2-express-bridge` can be used with Node’s `http2` module for similar setup.
5. HTTP/2 enables multiplexing, header compression, and server push on Express routes.

### React Frontend

- React itself is agnostic of HTTP versions.
- To use HTTP/2, serve the React app over HTTPS on a server supporting HTTP/2.
- Modern browsers will automatically use HTTP/2 with servers that support it.
- Typically, the React frontend is served via a static file server or CDN that handles HTTP/2.

### Summary

Enable HTTPS with valid or self-signed certificates, use `spdy` or `http2-express-bridge` for HTTP/2 server support in
Express.js, and serve the React frontend from an HTTP/2 capable host. No changes are needed in React code itself for HTTP/2
usage.

This provides a practical way to run an HTTP/2 backend with Express.js and an HTTP/2-enabled frontend delivery for React
apps.[1][2][3]

[1](https://typeofnan.dev/how-to-use-http2-with-express/)
[2](https://stackoverflow.com/questions/59534717/how-to-integrate-http2-with-expressjs-using-nodejs-module-http2)
[3](https://javascript.plainenglish.io/serving-hello-world-with-http2-and-express-js-4dd0ffe76860)
[4](https://github.com/expressjs/express/issues/5462)
[5](https://www.reddit.com/r/node/comments/axbml8/http2_support_in_express/)
[6](https://www.w3schools.com/nodejs/nodejs_http2.asp) [7](https://itnext.io/using-http-2-with-next-js-express-917791ca249b)
[8](https://expressjs.com)
