import mongoose,{Schema} from "mongoose";
import mongooseLong from 'mongoose-long';

mongooseLong(mongoose);
const { Types: { Long } } = mongoose; 
const ItemSchema=new Schema({
    title:{
        type:String,
        required:true,
    },
    imageUrl:{
        type:String,
        required:true,
    },
    category:{
        type:Schema.Types.ObjectId,
        ref:"Category"
    },
    msp:{
        type:Long,
        required:true
    },
    saleItems:[
        {
            type:Schema.Types.ObjectId,
            ref:"SaleItem"
        }
    ]

},{
    collection:"Item"
})



export const Item=mongoose.model("Item",ItemSchema)