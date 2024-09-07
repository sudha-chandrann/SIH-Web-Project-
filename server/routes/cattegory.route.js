import { Router } from "express";
import { getalltheitems, getcategories } from "../controllers/category.controller.js"
const router=Router()


router.route("/get").get(getcategories)
router.route("/items").post(getalltheitems)

export default router