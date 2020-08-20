import express from 'express';
import morgan from 'morgan';

import path from 'path';

import { Router } from "express";

import indexRoutes from './routes/index'
import moviesRoutes from './routes/movies.router'

const router = Router();
router.route('/test')
    .post((req,res)=>{
        console.log('req', req.body)
        console.log('req', req.file)
    })


const app = express();
const prefix = '/api';

//**Settings */
app.set('port',3009 || process.env.PORT);

//**Middleware */
app.use(morgan('dev'));

app.use(express.urlencoded({extended:true}));
app.use(express.json());

//**Routes */
app.use(`${prefix}`,router);
app.use(`${prefix}`,indexRoutes);

//**Public */
app.use('/uploads',express.static(path.resolve('public/uploads')));


export default app;