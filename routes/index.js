var express = require("express");
var router = express.Router();
var passport = require("passport");
var User = require("../models/user");
var middleware = require("../middleware/index.js");



//Homepage Route
router.get("/", function(req, res){
    res.render("landing");
});

// //=========================
// //AUTH ROUTES
// //========================


// //=========================
// //AUTH REGISTER
// //========================
// //Register Form
// router.get("/register", function(req, res){
//   res.render("register"); 
// });
// //Register Logic
// router.post("/register", function(req, res){
//   var newUser = new User({username: req.body.username});
//   User.register(newUser, req.body.password, function(err, user){
//       if(err) {
//           console.log(err);
//           return res.render("register");
//       } 
//       passport.authenticate("local")(req, res, function(){
//           res.redirect("/campgrounds");
//       });
//   });
// });



// //==========================
// //AUTH LOGIN
// //==========================
// router.get("/login", function(req, res){
//   res.render("login");
// });

// //Explanatation Below app.post("/login", middlewater, callback)
// router.post("/login", passport.authenticate("local", 
//     {
//         successRedirect: "/campgrounds",
//         failureRedirect: "/login"
//     }), function(req, res){
// });




// //==========================
// //AUTH LOGOUT
// //==========================
// router.get("/logout", function(req, res){
//   req.logout();
//   req.flash("success", "Logged you out!");
//   res.redirect("/campgrounds");
// });

//Needed export for routes
module.exports = router;