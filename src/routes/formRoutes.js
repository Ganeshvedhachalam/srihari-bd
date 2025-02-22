const express=require("express")

const { formSubmitController } = require("../controllers/form")
const router=express.Router()

router.post("/form",formSubmitController)
module.exports=router