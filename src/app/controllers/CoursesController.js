const Course = require("../models/Course");
const objectConverter = require("../../util/mongoose");
const { json } = require("express");

class CoursesController {
  //[GET] courses/:slug
  showCourse(req, res, next) {
    Course.findOne({ slug: req.params.slug })
      .then((course) =>
        res.render("courses/courses", {
          course: objectConverter.singleObjectConvert(course),
        })
      )
      .catch(next);
  }

  //[GET] courses/create
  create(req, res, next) {
    res.render("courses/create");
  }

  //[POST] courses/store
  store(req, res, next) {
    const formData = req.body;
    formData.image = `https://i.ytimg.com/vi/${req.body.videoId}/hqdefault.jpg`;
    const newCourse = new Course(formData);
    newCourse
      .save()
      .then(() => res.redirect("/"))
      .catch((error) => {});
  }

  //[GET] courses/:id/edit
  showEdit(req, res, next) {
    const id = req.params.id;
    Course.findById(id)
      .then((course) =>
        res.render("courses/edit", {
          course: objectConverter.singleObjectConvert(course),
        })
      )
      .catch(next);
  }

  //[PUT] courses/:id
  edit(req, res, next) {
    const formValue = req.body;
    formValue.updatedAt = Date.now();
    Course.updateOne({ _id: req.params.id }, formValue)
      .then(() => res.redirect("/me/stored/courses"))
      .catch(next);
  }
}

module.exports = new CoursesController();
