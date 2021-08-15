const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const a = 1;
  const b = 2;
  let c = a + b;

  res.send("Hello World! 3");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
