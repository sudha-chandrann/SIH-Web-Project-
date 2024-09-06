import mongoose,{Schema} from "mongoose";
const CategorySchema=new Schema({
    imageUrl:{
        type: String,
        required:true
    },
    title:{
        type: String,
        required:true
    },
    items:[{
        type: Schema.Types.ObjectId,
        ref: 'Item', 
    }],
},{
    collection:"Category"
})



export const Category=mongoose.model("Category",CategorySchema)