const mongoose = require("mongoose");
// connection to db
const db = async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect("mongodb://127.0.0.1:27017/tazza");
    console.log("DB Connected");
  } catch (error) {
    console.log("DB Connection Error");
  }
};

const formSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    maxLength: 50,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    maxLength: 50,
  },
  address: {
    type: String,
    required: true,
    trim: true,
    maxLength: 50,
  },
  number: {
    type: String,
    required: true,
    trim: true,
    maxLength: 50,
  },
});
const form = mongoose.model("form", formSchema);

module.exports = { db, form };
