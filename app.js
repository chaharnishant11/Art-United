var express = require("express");
var app = express();
var bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({extended: true }));
var campGrounds = [
       {name:"salmon hill",image:"https://pixabay.com/get/e837b1072af4003ed1584d05fb1d4e97e07ee3d21cac104491f8c770a0e4bdbb_340.jpg"},
       {name:"mount abu", image: "https://pixabay.com/get/e83db7082af3043ed1584d05fb1d4e97e07ee3d21cac104491f8c770a0e4bdbb_340.jpg"}
]; 

app.set("view engine","ejs");

app.get("/",function(req,res){
    res.render("landing");
});

app.get("/campgrounds",function(req,res){
  
       res.render("campgrounds",{campGrounds:campGrounds});
});


app.post("/campgrounds",function(req,res){
   var name = req.body.name;
   var image = req.body.image;
   var newCampground = {
       name:name,image:image
   }
   campGrounds.push(newCampground);
   
   res.redirect("/campgrounds");
});

app.get("/campgrounds/new",function(req,res){
  res.render("new");  
});

app.listen(process.env.PORT,process.env.IP,function(){
   console.log("The yelp camp server has  started!"); 
});
