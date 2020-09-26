const mongoose = require("mongoose");
// destructing for your convenience const Schema = mongoose.Schema; = const { Schema } = mongoose
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
});

mongoose.model("users", userSchema); // <---- load into  mongoose 2 arguments







