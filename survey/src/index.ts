import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import cors from 'cors';

dotenv.config()
import './database/database'
import { port } from './config/config';

import surveyRoute from './router/survey.routes';
import userRoute from './router/user.routes';
import optionRoute from './router/option.routes';
import commentRoute from './router/comment.routes';

const app = express()

app.use(morgan('dev'))
app.use(cors())
app.use(express.json({ limit: '30mb' }))
app.use(express.urlencoded({ extended: false, limit: '30mb' }))

app.use(surveyRoute)
app.use(userRoute)
app.use(optionRoute)
app.use(commentRoute)

app.listen(port, () => {
    console.log("Server on port", port);
})