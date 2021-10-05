import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  userId: String,
  password: String,
});

export default mongoose.model("users", userSchema);
