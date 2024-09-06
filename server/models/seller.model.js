import mongoose,{Schema} from "mongoose";
import mongooseLong from 'mongoose-long';

mongooseLong(mongoose);

const { Types: { Long } } = mongoose; 
const SellerSchema=new Schema(
    {
    user:{
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    itemsListed:[{
        type: Schema.Types.ObjectId,
        ref: 'SaleItem', 
    }],
    ratings:{
        type:Long,
        required:true
    }
},{
    collection: 'Seller' 
}
)



export const Seller=mongoose.model("Seller",SellerSchema)