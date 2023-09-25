// const app = require("express")()

const express =  require("express")
const app = express()



app.get('/',(req,res)=>{
    // res.send("Hello")
    res.json({message:"i am home page"})
})
app.get('/contact',(req,res)=>{
    res.send("Contact")
})
app.get('/about',(req,res)=>{
    res.send("About")
})

app.listen(3000,(req,res)=>{
    console.log("Nodejs has started at port 3000")
})
