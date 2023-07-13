import express from "express";
import {
  updateuser,
  deleteuser,
  getuser,
  getalluser,
} from "../controller/user.js";
import { verifyAdmin, verifyToken }  from "../utils/verifyToken.js";
import verifyUser from "../utils/verifyToken.js";
const router = express.Router();


// router.get("/checkauth", verifyToken, (req, res, next) => {
//   res.send("you are logged in");
// });

// router.get("/checkuser/:id", verifyUser, (req, res, next) => {
//   res.send("hello user, you are logged in and you can delete you account");
// });

// router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
//   res.send("hello admin, you are logged in and you can delete all account");
// });


// update
router.put("/:id" ,verifyUser, updateuser);
// delete
router.delete("/:id",verifyUser, deleteuser);
// get
router.get("/:id",verifyUser, getuser);
// getall
router.get("/",verifyAdmin, getalluser);

export default router;
