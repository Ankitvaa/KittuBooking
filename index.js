import express from "express";
import dotenv from "dotenv";
import connectdb from "./connectdb/connectDB.js";
import hotelroute from "./routes/hotel.js";
import authroute from "./routes/auth.js";
import roomroute from "./routes/room.js";
import usersoute from "./routes/users.js";
import cookieParser from "cookie-parser";
import cors from "cors";

dotenv.config();

const app = express();
const port = process.env.port;
const DATABASE_URL = process.env.DATABASE_URL;

connectdb(DATABASE_URL);

// middlewares
app.use(cookieParser());
// app.use(cors());

app.use(express.json());
app.use("/api/hotels/", hotelroute);
app.use("/api/auth/", authroute);
app.use("/api/rooms/", roomroute);
app.use("/api/users/", usersoute);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errormessage = err.message || "something went wrong";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errormessage,
    stack: err.stack,
  });
});

app.listen(port, () => {
  console.log(`server is running at http://localhost:${port}`);
});
