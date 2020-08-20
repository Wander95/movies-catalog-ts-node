import { Router } from "express";
import { createPhoto,getPhoto } from "../controllers/Photo.controller";
import multer from "../libs/multer";


const router = Router();

router.route('/photo')
    .post(multer.single('image'),createPhoto)
    .get(getPhoto);

    
export default router;