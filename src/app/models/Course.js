const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const slug = require("mongoose-slug-generator");
mongoose.plugin(slug);

const Course = new Schema(
  {
    id: ObjectId,
    name: { type: String, maxLength: 255, require: true },
    description: String,
    image: String,
    videoId: String,
    classification: String,
    slug: { type: String, slug: "name", unique: true },
    //   date: Date,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Course", Course);
