const express = require("express");
const morgan = require("morgan");
const handlebars = require("express-handlebars");
const path = require("path");
const methodOveride = require("method-override");

const route = require("./routes/index.route");

//Connect to db
const db = require("./config/db/index");
db.connect();

const app = express();
const port = 3000;

//Method overide setting
app.use(methodOveride("_method"));

//neu request file tinh thi se vao folder nay de tim
//return src/rescources/public
app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Logger
// app.use(morgan("combined"));

//Define and set engine
app.engine(
  "hbs",
  handlebars({
    extname: "hbs",
    helpers: {
      autoIncrease: function (a) {
        return ++a;
      },
    },
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources", "views"));

//Route init
route(app);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
