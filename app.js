import express from 'express';
import cors from 'cors'
const app = express()
app.listen(process.env.PORT || 4000);
app.use(cors())
app.use(express.json());