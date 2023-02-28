const express = require("express");
const app = express();
const cors = require("cors");

const port = 4000;
app.use(cors());

app.get("/api", (req, res) => res.json({message:"hello"}));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});