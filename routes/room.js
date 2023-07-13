import express from "express";
import { createRoom, deleteRoom, getRoom, getallRoom, updateRoom,updateRoomAvailability } from "../controller/room.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

// create
router.post("/:hotelid", verifyAdmin, createRoom);
// update
router.put("/:id", verifyAdmin, updateRoom);

router.put("/availablity/:id",  updateRoomAvailability);

// delete
router.delete("/:id/:hotelid", verifyAdmin, deleteRoom);
// get 
router.get("/:id", getRoom);
// getall
router.get("/", getallRoom);

export default router;
