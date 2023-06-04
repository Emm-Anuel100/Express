
const express = require("express")
const app = express(); 
var port = 5000;


// creating a simple server 

app.listen(port, function() {
   console.log("app is running on port " + port);
})


app.use(express.static('contents'))


app.get("/", function(request,response) {   // "/" index routing [home page]
   response.sendFile(__dirname+"/contents/index.html");
})






function sum(request,response,next) {
   console.log(1+1);
   next()        
}
app.use(sum) 


app.use(express.static('contents')) 


app.get("/", function(request,response) {   // "/" index route
   response.sendFile(__dirname+"/contents/index.html");
})


app.get("/about", function(request,response) {  
   response.sendFile(__dirname+"/contents/About.html");
})

app.get("/contact", function(request,response) {  
   response.sendFile(__dirname+"/contents/Contact.html");
})

app.get("/load", function(request,response) {  
   response.sendFile(__dirname+"/contents/Load.html");
})

app.get("/Register", function(request,response) {  
   response.sendFile(__dirname+"/contents/Register.html");
})















// app.get("/", function(request,response) {   // "/" index routing
//    var result = app.get("benz");
//    response.send(result);
// })
