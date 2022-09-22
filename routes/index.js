var express = require("express");
const ID = require("../Schemas/ID&PASSWORD Schemas");
var router = express.Router();

/* GET home page. */
router.post("/postid&pass", async function (req, res, next) {
  try {
    const postid = await ID.create(req.body);
    res.status(201).json({
      status: "sucess",
      postid,
    });
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;
