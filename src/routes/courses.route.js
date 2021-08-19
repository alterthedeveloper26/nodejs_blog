const express = require("express");
const coursesController = require("../app/controllers/CoursesController");
const router = express.Router();

router.get("/create", coursesController.create);
router.post("/store", coursesController.store);

router.get("/:id/edit", coursesController.showEdit);
router.put("/:id", coursesController.edit);

router.get("/:slug", coursesController.showCourse);

module.exports = router;
