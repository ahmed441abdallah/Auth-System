import express from 'express';
import * as dotenv from 'dotenv';
import { dbConnections } from './database/dbConnections.js';
import userRouter from './src/modules/user/user.router.js';
dotenv.config();
const app = express();
app.use(express.json());
app.use("/user", userRouter)
dbConnections()
app.get('/', async (req, res) => {

    return res.send('Hello World');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});