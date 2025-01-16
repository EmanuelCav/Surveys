import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import cors from 'cors';

dotenv.config()

import { port, url } from './config/config';

import surveyRoute from './router/survey.routes';
import userRoute from './router/user.routes';
import optionRoute from './router/option.routes';
import commentRoute from './router/comment.routes';
import categoryRoute from './router/category.routes';
import countryRoute from './router/country.routes'

const app = express()

app.use(morgan('combined'))
app.use(cors({
    credentials: true,
    origin: `${url}`
}))
app.use(express.json({ limit: '30mb' }))
app.use(express.urlencoded({ extended: false, limit: '30mb' }))

app.use(surveyRoute)
app.use(userRoute)
app.use(optionRoute)
app.use(commentRoute)
app.use(categoryRoute)
app.use(countryRoute)

app.listen(port, () => {
    console.log("Server on port", port);
})