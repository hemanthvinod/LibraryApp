const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://hemanthvinodcr7:mongoatlas123@cluster0.edwg9.mongodb.net/Library",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
  title: String,
  image: String,
  about: String,
});

const authordata = mongoose.model("authordata", AuthorSchema);

module.exports = authordata;
