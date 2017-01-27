import express, { Router } from 'express';
import serveIndex from 'serve-index';
import serveStatic from 'serve-static';

const app = express();

app.use('/src', serveIndex('src', { icons: true, view: 'details' }));
app.use('/src', serveStatic('src'));
//app.use('/web', serveIndex('web', { icons: true, view: 'details' }));
//app.use('/web', serveStatic('web'));

export default app;
