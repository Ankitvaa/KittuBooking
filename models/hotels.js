import mongoose from "mongoose";

const hotelschema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },

    city: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    distance: {
      type: String,
    },
    title: {
      type: String,
    },
    images: {
      type: [String],
    },
    desc: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      min: 0,
      max: 5,
    },
    rooms: {
      type: [String],
    },
    cheapest: {
      type: Number,
      required: true,
    },
    featured: {
      type: Boolean,
      dafault: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Hotel", hotelschema);
