import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
const app= express()
app.use(cors(
   {
     origin:process.env.CORS_ORIGIN,
     credentials:true
    }
))
app.use(express.json())

app.use(express.urlencoded({
    extended:true,
    limit:"16kb"
}))

app.use(cookieParser())
import SellerRouter from "./routes/seller.route.js"
import CategoryRouter from "./routes/cattegory.route.js";

app.use("/api/v1/sellers",SellerRouter)
app.use("/api/v1/category",CategoryRouter)





export {app}