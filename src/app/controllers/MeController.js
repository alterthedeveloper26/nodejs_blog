const Course = require("../models/Course");
const objectConverter = require("../../util/mongoose");

class MeController {
  //[GET] me/stored/courses
  getStoredCourses(req, res, next) {
    Course.find({})
      .then((courses) =>
        res.render("me/stored-courses", {
          courses: objectConverter.multipleObjectConvert(courses),
        })
      )
      .catch(next);
  }
}

module.exports = new MeController();
