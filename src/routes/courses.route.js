const express = require("express");
const coursesController = require("../app/controllers/CoursesController");
const router = express.Router();

router.post("/handle-form-actions", coursesController.handleFormActions);

router.get("/create", coursesController.create);
router.post("/store", coursesController.store);

router.get("/:id/edit", coursesController.showEdit);
router.put("/:id", coursesController.edit);

router.delete("/:id/destroy", coursesController.destroy);
router.delete("/:id", coursesController.delete);
router.patch("/:id/restore", coursesController.restore);

router.get("/:slug", coursesController.showCourse);

module.exports = router;
