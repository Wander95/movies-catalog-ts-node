import { Router } from "express";
import { getMovies,createMovie } from "../controllers/MoviesController";


const router = Router();


router.route('/movie')
    .post((req,res)=>{
        console.log(req.body)
    })
    .get()
  
    .put()
    .delete()

router.route('/movies')
    .get(getMovies)

export default router;