import {Category} from "../models/category.model.js"
import { asyncHandler } from "../helper/asynchandler.js"
import { ApiResponse } from "../helper/ApiResponse.js"
import { Item } from "../models/item.model.js";

const getalltheitems=asyncHandler(async(req,res)=>{
    try{
        const {search}=req.body;
        const query = new RegExp(search, 'i', 'g');
        const items = await Item.find( { title: query },).select('title _id').limit(10);
        return res.status(200).json(new ApiResponse(200,items,"items is retrieved"))
    }
    catch(error){
        return res.status(500).json(new ApiResponse(500,{},error||"failed to find items"))
    }
})

const getcategories=asyncHandler(async(req,res)=>{
    try{
       
        const categories=await Category.find();
        if(!categories){
            return res.status(400).json(new ApiResponse(400,{},"failed to get categories"))
        }
        return res.status(200).json(new ApiResponse(200,categories,"categories is retrieved"))
    
    }
    catch(error){
        return res.status(500).json(new ApiResponse(500,{},error||"failed to find categories"))
    }

})

const getallinfoitems=asyncHandler(async(req,res)=>{
    try{
        const {search}=req.body;
        // const itemId=
        const items = await Item.find( { title: query },).select('title _id').limit(10);

    }
    catch(error){
        return res.status(500).json(new ApiResponse(500,{},error||"failed to find itemsgraph"))

    }
})

export {
    getcategories,
    getalltheitems
}