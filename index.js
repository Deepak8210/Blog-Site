const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("working on fine on website");
});
app.listen(process.env.PORT || 3000, () => {
  console.log("running on port 3000");
});
