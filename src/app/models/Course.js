const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const slug = require("mongoose-slug-generator");
const mongooseDelete = require("mongoose-delete");

const connection = mongoose.createConnection(
  "mongodb://localhost:27017/f8_education_dev"
);
const autoIncrement = require("mongoose-auto-increment");
autoIncrement.initialize(connection);

const Course = new Schema(
  {
    id: ObjectId,
    name: { type: String, maxLength: 255, require: true },
    description: String,
    image: String,
    videoId: String,
    classification: String,
    slug: { type: String, slug: "name", unique: true },
  },
  {
    timestamps: true,
  }
);

mongoose.plugin(slug);

Course.plugin(mongooseDelete, {
  overrideMethods: "all",
  deletedAt: true,
});

Course.plugin(autoIncrement.plugin, { model: "Course", field: "courseId" });

//Custome query helper
Course.query.mySort = function (res) {
  const { _sort } = res.locals;
  if (_sort.enable) {
    return this.sort({
      [_sort.column]: _sort.type,
    });
  }
  return this;
};

module.exports = mongoose.model("Course", Course);
