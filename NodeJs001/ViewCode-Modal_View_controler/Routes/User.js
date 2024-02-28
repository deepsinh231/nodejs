const express = require("express");
const {
    getuser,
    cretenewuser,
    deleteuser,
    handleGetAlluser,
    updateUser
} = require("../Controllers/user");

const router = express.Router();



router.route("/:id")
    .get(getuser)
    .patch(updateUser)
    .delete(deleteuser);
router.route("/").get(handleGetAlluser).post(cretenewuser);



module.exports = router;