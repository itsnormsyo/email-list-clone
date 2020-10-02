const mongoose = require("mongoose");
// destructing for your convenience const Schema = mongoose.Schema; = const { Schema } = mongoose
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
  credits: { type: Number, default: 0 },
});

mongoose.model("users", userSchema); // <---- load into  mongoose 2 arguments
