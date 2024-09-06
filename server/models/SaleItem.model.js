import mongoose,{Schema} from "mongoose";
import { Double } from 'mongodb';
mongoose.Schema.Types.Double = Double;

const SaleItemSchema=new Schema({
    
    active:{
        type:Boolean,
        required:true
    },
    active:{
        type:Double,
        required:true
    },
    item:{
        type:Schema.Types.ObjectId,
        ref:"Item",
    },
    ownerId:{
        type:String,
        required:true
    },
    pricePerKg:{
        type:Double,
        required:true
    },
    quantityInKg:{
        type:Double,
        required:true
    },
    reviews:[
        {
            type:Schema.Types.ObjectId,
            ref:"Review"
        }
    ],
    seller:{
        type:Schema.Types.ObjectId,
        ref:"Seller"
    }

},{
    collection:"SaleItem"
})



export const SaleItem=mongoose.model("SaleItem",SaleItemSchema)