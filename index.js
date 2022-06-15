const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
const Token ='b2d2b6206e9870968a0f6732185fbcff0369e04d273156bef0ae6a02d2a3c8b0a4b807dbce743ed04d6f7b37868b9ecbd95688314ca66ae55a2234039249624f'
app.post("/login", (req, res) => {
    const {email, password} = req.body;
    if(password===''){
        res.send({success:false,
            error: 'Missing Password'
        })
    }
    else if(email===''){
        res.send({success:false,
            error: 'Missing Email'
        })
    }
    else{
        const token = jwt.sign({
            email: email}, 
            Token, 
            {expiresIn: '1h'})
        res.send({
            success: true,
            token: token
        })
    }
    
  }
);
app.get("/", (req, res) => {
  res.send("Greetings from Fakhrul Islam Fuad");
});
app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
