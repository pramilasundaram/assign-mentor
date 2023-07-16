const router = require('express').Router();

const {createteacher,getteachers,updateteacher,getteacher,deleteteacher,studentlist}=require("../controller/teachercontroller")
    
router.route("/createteacher").post(createteacher)
router.route("/getteachers").get(getteachers)
router.route("/updateteacher/:id").put(updateteacher)
router.route("/getteacher/:id").get(getteacher)
router.route("/deleteteacher/:id").delete(deleteteacher)
router.route("/studentlist/:id").get(studentlist)

module.exports = router;