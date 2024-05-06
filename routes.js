const express = require('express')
const router = express.Router();
const User = require('./models/user')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

router.use(bodyParser.urlencoded({
    extended: true
  }));
  
router.use(express.json())

router.get('/home', function (req, res) {
    try{
        console.log("/home greeted..")
        res.status(200)
        res.sendFile(__dirname + "/public/index.html");
    }catch(error){
        res.status(500)
        console.log(error)
    }
})

router.get('/register', function (req, res) {
    try{
        console.log("register greeted..")
        res.status(200)
        res.sendFile(__dirname + "/public/register.html");
    }catch(error){
        res.status(500)
        console.log(error)
    }
})

router.get('/login', function (req, res) {
    try{
        console.log("login greeted..")
        res.status(200)
        res.sendFile(__dirname + "/public/login.html");
    }catch(error){
        res.status(500)
        console.log(error)
    }
})

router.post("/login", async function(req, res){
    try {
        // check if the user exists
        const user = await User.findOne({username: req.body.username});
        if (user) {
            console.log("testing" + user + "\n body user is" + req.body.username)
          //check if password matches
          const result = req.body.password === user.password;
          if (result) {
            console.log("Login success!")
            res.sendFile(__dirname + "/public/index.html");
          } else {
            res.status(400).json({ error: "password doesn't match" });
          }
        } else {
          res.status(400).json({ error: "User doesn't exist" });
        }
      } catch (error) {
        res.status(400).json({ error });
      }
})

router.post('/register', async(req, res) => {
    try{
        // let newuser = new User({
        //     fullname: req.body.fullname,
        //     username: req.body.username,
        //     password: req.body.password
        // })
        console.log("submitting user..")
        //newuser.save();
        console.log(req.body)
        const user = await User.create(req.body)
        // mongoose.connection.collection('users').insertOne(newuser,function(err, collection){
        //     if (err) throw err;
        //     console.log("Record inserted Successfully");
        // });
        res.status(200)
        res.sendFile(__dirname + "/public/login.html");

    }catch(error){
        res.status(500)
        console.log(error)
    }
})

module.exports = router;

