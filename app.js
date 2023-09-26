import express from 'express';
import { postRouter } from './src/routes/post.routes.js';

const app = express();


const port = 3001

app.use('/', postRouter);

app.listen(port, () => {
    console.log(`Server listenig in http://localhost:${port}`)
});