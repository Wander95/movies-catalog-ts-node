import { Response,Request} from 'express';
import MoviesModel from '../models/MoviesModel';



export const getMovie = async (req:Request,res:Response):Promise<Response>=>{
    const { id } =req.params;
    const movie = await MoviesModel.findOne({id});
    return res.json({

    })
}



export const getMovies = async (req:Request,res:Response): Promise<Response> =>{

    const movies = await MoviesModel.find();

    return res.json({
        message:'Movies retrieved',
        movies
    })
}

export const createMovie = async (req:Request,res:Response): Promise<Response> =>{
    const { title,description,author,rating } = req.body;
    console.log(req.files);
    console.log('req.file', req.file)

    return MoviesModel.create({title,author,image:req.file,description,rating,video:req.file})
    .then((result)=>{
        return res.json({
            message:'movie saved',
            result
        })
    })
    .catch(err=>{
        return res.json({
            message:'Error saving the movie',
            err
        })
    })
   
    
 
    
}