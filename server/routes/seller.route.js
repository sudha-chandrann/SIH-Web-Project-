import { Router } from "express";
import{ createRatings, getratings} from "../controllers/seller.controller.js";
const router=Router()

router.route("/get").post(createRatings)
router.route("/get").get(getratings)


export default router