const express = require('express');
const cors = require('cors');
const User = require('./db/user');
require('./db/config');

const app = express();
app.use(express.json());
app.use(cors());

app.post("/signup", async (req, res)=> {
    let user = new User(req.body);
    let result = await user.save();
    result = result.toObject();
    delete result.password;
    res.send(result);
});

app.listen(5000);
