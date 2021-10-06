import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  userId: String,
  password: String,
  email: String,
});

export default mongoose.model("users", userSchema);
