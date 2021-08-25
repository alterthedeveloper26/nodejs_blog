const Course = require("../models/Course");
const objectConverter = require("../../util/mongoose");

class MeController {
  //[GET] me/stored/courses
  getStoredCourses(req, res, next) {
    Promise.all([Course.countDocumentsDeleted(), Course.find().mySort(res)])
      .then(([deleteCount, courses]) => {
        res.render("me/stored-courses", {
          courses: objectConverter.multipleObjectConvert(courses),
          deleteCount,
        });
      })
      .catch(next);
  }

  //[GET] me/bin/courses
  getDeletedCourses(req, res, next) {
    Course.findDeleted()
      .then((courses) => {
        res.render("me/deleted-courses", {
          courses: objectConverter.multipleObjectConvert(courses),
        });
      })
      .catch(next);
  }
}

module.exports = new MeController();
