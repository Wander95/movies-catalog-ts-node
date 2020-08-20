import { Request, Response} from 'express';
import PhotoModel from '../models/PhotoModel';

export const getPhoto = async (req:Request,res:Response): Promise<Response>=>{

    const photos = await PhotoModel.find();
    return res.json({
        message:'Photos',
        photos
     })
 }

 
export const createPhoto = async (req:Request,res:Response):Promise<Response>=>{
    const { title,description } = req.body;
    
    const newPhoto = {
        title:title,
        description:description,
        imagePath:req.file.path
    };

    const photo = new PhotoModel(newPhoto);
    await photo.save();

    return res.json({
       message:'Photo saved',
       photo
    });
}