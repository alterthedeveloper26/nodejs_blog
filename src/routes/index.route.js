const newsRouter = require("./news.route");
const siteRouter = require("./site.route");
const coursesRouter = require("./courses.route");
const meRouter = require("./me.route");

function route(app) {
  app.use("/me", meRouter);
  app.use("/courses", coursesRouter);
  app.use("/news", newsRouter);
  app.use("/", siteRouter);
}

module.exports = route;
