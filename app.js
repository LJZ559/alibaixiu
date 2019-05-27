const express=require("express")
const bodyParser=require("body-parser")
const app=express()
const router=require("./router.js")

app.set("view engine","ejs")
app.set("views","./views")

app.use("/assets",express.static("assets"))
app.use("/uploads",express.static("uploads"))

app.listen(3000,"127.0.0.1",()=>{
    console.log("http://127.0.0.1:3000")
})

app.use(bodyParser.urlencoded({extended:false}))

app.use(router)

