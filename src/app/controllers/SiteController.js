class SiteController {
  // [GET] /
  index(req, res) {
    res.render("home");
  }

  // [GET] /search
  search(req, res) {
    console.log("Running search");
    res.render("search");
  }
}

module.exports = new SiteController();
