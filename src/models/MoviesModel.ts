import mongoose,{ Schema,model,Document } from 'mongoose';

interface IMovies extends Document{
    title:string,
    date:string,
    description:string,
    author:string,
    imagePath:string,
    videoPath:string,
    rating:number
}

interface IMoviesMongo extends Document {
    title:string,
    description:string,
    author:string,
    image:any,
    video:any,
    rating:number
}

const MoviesSchema = new Schema({
    title:{
        type:String,
        required:true,
    },
    author:{
        type:String,
        required:true
    },
    description:{
        type:String,
        default:'No description'
    },
    rating:{
        type:Number,
        default:1
    },
    date: { 
        type: Date, 
        default: Date.now 
    },
    image:{
        type:Buffer,
        contentType:String
    },
    video:{
        type:Buffer,
        contentType:String
    }

})

export default model<IMoviesMongo>('Movie',MoviesSchema)