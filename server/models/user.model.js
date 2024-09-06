import mongoose,{Schema} from "mongoose";
const UserSchema=new Schema(
 {
   name:{
    type:String,
    required:true
   },
   email:{
    type:String,
   },
   address:{
    type:String,
    required:true
   },
   buyer:{
    type:Schema.Types.ObjectId,
    ref:"Buyer"
   },
   seller:{
    type:Schema.Types.ObjectId,
    ref:"Seller"
   },
   ownerId:{
    type:String,
    required:true
   },
   phoneNumber:{
    type:String,
    required:true
   },
   picture:{
    type:String,
    required:true
   }
},{
  collection: 'User' 
}
)



export const User=mongoose.model("User",UserSchema)