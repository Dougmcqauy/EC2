const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const path = require("path");
const cors = require("cors");
const enviroment = "production"; // development or production

const port = 4000;
app.use(cors());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse requests of content-type - application/json
app.use(bodyParser.json());

// Serve frontend
if (enviroment === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
  app.get("/api", (req, res) => res.json({message:"hello"}));
  app.get("*", (req, res) =>
    res.sendFile(
      path.resolve(__dirname, "../", "client", "build", "index.html")
    )
  );
} else {
  app.get("/", (req, res) => res.send("Please set to production"));
}


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});