const {Router} = require("express")
const router = Router();


router.get("/",(req,res)=>{
    res.send("HomePage");
})
router.get("/about",(req,res)=>{
    res.send("About Us Page");
})

module.exports = router;