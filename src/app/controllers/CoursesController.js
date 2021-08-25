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
    const formData = { ...req.body };
    formData.image = `https://i.ytimg.com/vi/${req.body.videoId}/hqdefault.jpg`;
    const newCourse = new Course(formData);
    newCourse
      .save()
      .then(() => res.redirect("/me/stored/courses"))
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

  //[DELETE] courses/:id
  delete(req, res, next) {
    Course.delete({ _id: req.params.id })
      .then(() => res.redirect("back"))
      .catch(next);
  }

  //[DELETE] courses/:id/destroy
  destroy(req, res, next) {
    Course.deleteOne({ _id: req.params.id })
      .then(() => res.redirect("back"))
      .catch(next);
  }

  //[PATCH] courses/:id/restore
  restore(req, res, next) {
    Course.restore({ _id: req.params.id })
      .then(() => res.redirect("back"))
      .catch(next);
  }

  //[POST] /courses/handle-form-action
  handleFormActions(req, res, next) {
    switch (req.body.action) {
      case "delete":
        Course.delete({ _id: { $in: req.body.courseIds } })
          .then(() => res.redirect("back"))
          .catch(next);
        break;
      case "":
        break;
    }
  }
}

module.exports = new CoursesController();
