//Configuration Of The Node Packages
var express =           require("express"),
    flash =             require("connect-flash"),
    bodyParser =        require("body-parser"),
    mongoose =          require("mongoose"),
    passport =          require("passport"),
    LocalStrategy =     require("passport-local"),
    methodOverride =    require("method-override"),
    app =               express();
    
//Models
var User = require("./models/user");

//Routes
var indexRoutes = require("./routes/index");


//Passport Configuration
app.use(require("express-session")({
    secret: "Big Mama",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


//Connection To A MongoDB Database Make Sure Mongod Is Running In Background
mongoose.connect("mongodb://localhost/jungle");

//Boilerplate code needed for body-parser npm package
app.use(bodyParser.urlencoded({ extended: true }));

//Allows us to not use .ejs when using render on a file
app.set("view engine", "ejs");

//Getting Public Stylesheets And Javascript
app.use(express.static(__dirname + "/public"));

//Setup For MethodOverride NPM
app.use(methodOverride('_method'));

//Flash Connect Boilerplate
app.use(flash());

//Routes
app.use(indexRoutes);

//FUNCTION TO CHECK EVERY SINGLE PAGE TO GET THE CURRENT USERS INFO
//WE ARE ALSO PASSING THE ERROR MESSAGES TO EVERY SINGLE PAGE
app.use(function(req, res, next){
    res.locals.currentUser = req.user;
    res.locals.error = req.flash("error");
    res.locals.success = req.flash("success");
    res.locals.info = req.flash("info");
    res.locals.warning = req.flash("warning");
    next();
});


//Boilerplate for Preview Application In Cloud9
app.listen(process.env.PORT, function(){
    console.log("https://sellgrip-kylelortscher1.c9users.io/");
});