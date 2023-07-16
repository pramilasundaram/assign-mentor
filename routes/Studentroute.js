const router = require('express').Router();

//import contact controller
const {createstudent,getstudents,updatestudent,getstudent,deletestudent}=require("../controller/studentcontroller")
    // forgotPassword,resetPassword
router.route("/createstudent").post(createstudent)
router.route("/getstudents").get(getstudents)
router.route("/updatestudent/:id").put(updatestudent)
router.route("/getstudent/:id").get(getstudent)
router.route("/deletestudent/:id").delete(deletestudent)

// router.route("/forgotpassword").post( forgotPassword)
// router.route("/resetpassword/:userId/:token").post( resetPassword)


module.exports = router;