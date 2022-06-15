const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.post('/login', async (req, res) => {
    try {
      const { email, password } = req.body
      console.log(email,password)
    } catch (error) {
      console.log(error)
    }
  })

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
