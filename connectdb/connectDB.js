import mongoose from "mongoose";

const connectdb = async (DATABASE_URL) => {
  try {
    const DB_OPTION = {
      dbName: "Hotel_Booking",
    };
    await mongoose.connect(DATABASE_URL, DB_OPTION);
    console.log("mongodb connect sucsessfully");
  } catch (error) {
    console.log(error);
  }
};

export default connectdb;