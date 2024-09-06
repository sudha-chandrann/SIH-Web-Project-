import mongoose,{Schema} from "mongoose";
import mongooseLong from 'mongoose-long';

mongooseLong(mongoose);
const { Types: { Long } } = mongoose; 
const ReviewSchema=new Schema({
   rating:{
    type:Long,
    required:true
   },
   reviewText:{
    type:String,
    // required:true
   },
  //  reviewedby:{
  //    type:Schema.Types.ObjectId,
  //    ref:"User"
  //  },
   saleItem:{
    type:Schema.Types.ObjectId,
    ref:"SaleItem"
   }
},{
   collection:"Review"
})



export const Review=mongoose.model("Review",ReviewSchema)