require("dotenv").config()
var express = require("express")
var config = require("./config")
var userRoutes = require("./router/userRoutes")
var productRoutes = require("./router/productRoutes")
var cors = require("cors")
// var upload = require("./upload")

config();

var app = express()

const port = process.env.PORT;

app.use(cors());
app.use(express.json())
app.use("/upload",express.static("./upload"))
app.use("/api/v1/user", userRoutes)
app.use("/api/v1/product", productRoutes)

// app.get("/",function(req,res){
//     res.send(userdata)
// })

// app.get("/about",function (req,res){
//     res.send("this is about page")
// })

app.listen(port,()=>{
    console.log(`server is running on port no ${port}`)
})