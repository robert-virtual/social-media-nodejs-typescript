const { Schema, model } = require("./db");

const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
  },
  password: String,
  email: {
    type:String,
    unique:true
  },
  createAt: {
    type: String,
    default: new Date().toLocaleDateString(),
  },
});
const User = model("User", userSchema);

module.exports = User

