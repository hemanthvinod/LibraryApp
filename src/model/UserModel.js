//Part 2:# point 10: created a user schema for new user to be added to the database
const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://hemanthvinod:mongodbatlas@123@cluster0.edwg9.mongodb.net/Library",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  uid: String,
  pwd: String,
});

const userdata = mongoose.model("userdata", UserSchema);

module.exports = userdata;
