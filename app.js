import express from 'express';
import { postRouter } from './src/routes/post.routes.js';
import { startDB } from './src/config/database.js';

const app = express();

// middlewares
app.use(express.json())


const port = 3001

app.use('/', postRouter);

app.listen(port, () => {
    console.log(`Server listenig in http://localhost:${port}`)
    startDB()
}) 