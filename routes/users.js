const express = require("express");
const router = express.Router();
const userControllers = require("../controllers/userControllers");

router.get("/",userControllers.getUsers);

 
router.post("/",userControllers.postusers);

router.delete("/:id",userControllers.deleteusers);

module.exports = router