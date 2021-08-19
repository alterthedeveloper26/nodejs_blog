const Course = require("../models/Course");
const MongooseConvertor = require("../../util/mongoose");

class SiteController {
  // [GET] /
  // index(req, res) {
  //   Course.find({}, (err, courses) => {
  //     if (!err) {
  //       res.json(courses);
  //       return;
  //     }
  //     res.status(400).json({ error: "ERROR!!!" });
  //   });
  //   // res.render("home");
  // }

  index(req, res, next) {
    Course.find({})
      .then((courses) => {
        res.render("home", {
          courses: MongooseConvertor.multipleObjectConvert(courses),
        });
      })
      .catch(next);
  }

  // [GET] /search
  search(req, res) {
    console.log("Running search");
    res.render("search");
  }
}

module.exports = new SiteController();
