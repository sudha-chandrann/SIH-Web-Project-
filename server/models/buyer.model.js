import mongoose,{Schema} from "mongoose";
const BuyerSchema=new Schema({
    user:{
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    itemsBought:[{
        type: Schema.Types.ObjectId,
        ref: 'SaleItem', 
    }]
},{
    collection:"Buyer"
})



export const Buyer=mongoose.model("Buyer",BuyerSchema)