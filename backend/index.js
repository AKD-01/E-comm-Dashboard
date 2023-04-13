const express = require("express");
const cors = require("cors");
const User = require("./db/user");
require("./db/config");

const app = express();
app.use(express.json());
app.use(cors());

app.post("/signup", async (req, res) => {
  let user = new User(req.body);
  let result = await user.save();
  result = result.toObject();
  delete result.password;
  res.send(result);
});

app.post("/login", async (req, res) => {
  if (req.body.password && req.body.email) {
    let user = await User.findOne(req.body).select("-password");
    if (user) {
      res.send(user);
    } else {
      res.send({ result: "No such user found." });
    }
  } else {
    res.send({ result: "Please enter all values correctly." });
  }
});

app.listen(5000);
