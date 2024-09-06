import { Seller } from "../models/seller.model.js"
import { asyncHandler } from "../helper/asynchandler.js"
import { ApiResponse } from "../helper/ApiResponse.js"

const createRatings=asyncHandler(async(req,res)=>{
    try{
        const {ratings}=req.body
        const newRating=await Seller.create({
            ratings:ratings,
        })
        if(!newRating){
            return res.status(400).json(new ApiResponse(400,{}," failed to creat ratings"))
        }
      
    
        return res.status(200).json ( new ApiResponse(200,newRating,"rating is created"))
    }
    catch(error){
        return res.status(500).json(new ApiResponse(500,{},error||"failed to create rating"))
    }

})

const getratings=asyncHandler(async(req,res)=>{
    try{
       
        const ratings=await Seller.find()
        if(!ratings){
            return res.status(400).json(new ApiResponse(400,{}," failed to fetch ratings"))
        }
      
    
        return res.status(200).json ( new ApiResponse(200,ratings,"rating is created"))
    }
    catch(error){
        return res.status(500).json(new ApiResponse(500,{},error||"failed to create rating"))
    }

})

export {
    createRatings,
    getratings
}