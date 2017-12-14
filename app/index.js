import http from 'http';
import express from 'express';
import passport from 'passport';
import bodyParser from 'body-parser';
import io from 'socket.io';

import routes from './routes';

let app = express();

app.server = http.createServer(app);

// MiddleWare

// Parse application/json

app.use(bodyParser.json({
  limit: process.env.BODY_LIMIT
}));


//API Routes v1
app.use('/v1', routes);

// Serve swaggerUi

app.server.listen(process.env.PORT || 3005);
console.log(`Started on port ${app.server.address().port}`);

export default app;
