import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    requried: [true, "name is requried"],
  },
  email: {
    type: String,
    requried: [true, "email is requried"],
  },
  message: {
    type: String,
    required: [true, "please fill this message field"],
  },
});

const UserModel = mongoose.model("users", UserSchema);

export default UserModel;
