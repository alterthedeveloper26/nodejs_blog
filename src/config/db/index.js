const mongoose = require("mongoose");
async function connect() {
  try {
    await mongoose.connect("mongodb://localhost:27017/f8_education_dev", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      //   useFindAndModify: false,
      useCreateIndex: true,
    });
    console.log("Connected!!!");
  } catch (error) {
    console.log(error);
  }
}

module.exports = { connect };
