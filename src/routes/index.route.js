const newsRouter = require("./news.route");
const siteRouter = require("./site.route");
const coursesRouter = require("./courses.route");

function route(app) {
  app.use("/courses", coursesRouter);
  app.use("/news", newsRouter);
  app.use("/", siteRouter);
}

module.exports = route;
