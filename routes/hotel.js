import express from "express";
import {
  countByCity,
  countByType,
  createhotel,
  deletehotel,
  getHotelRooms,
  getallhotel,
  gethotel,
  updatehotel,
} from "../controller/hotel.js";
import { verifyAdmin, verifyToken } from "../utils/verifyToken.js";
import verifyUser from "../utils/verifyToken.js";

const router = express.Router();
// create
router.post("/", verifyAdmin, createhotel);
// update
router.put("/:id", verifyAdmin, updatehotel);
// delete
router.delete("/:id", verifyAdmin, deletehotel);
// get
router.get("/find/:id", gethotel);
// getall
router.get("/", getallhotel);
// get query
router.get("/countByCity", countByCity);

router.get("/countByType", countByType);

router.get("/room/:id", getHotelRooms);

export default router;
