const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const dotenv = require("dotenv")

dotenv.config()
const app = express()
app.use(cors())
app.use(bodyParser.json())

const {Schema} = mongoose

const productShema  = new Schema({
    imgUrl: String,
    title: String,
    name: String,
    price: Number,
})

const Products = mongoose.model("products", productShema)


//All Data
app.get("/api", (req,res)=>{
    Products.find({},(err,docs)=>{
        if(!err){
            res.send(docs)
            res.status(200)
        }else{
            res.status(404).json({message: err})
        }
    })
})

//Data by id
app.get("/api/:id",(req,res)=>{
    const {id} = req.params;
    Products.findById(id,(err,doc)=>{
        if(!err){
            if(doc){
                res.send(doc)
                res.status(200)
            }else{
                res.status(404).json({message: err})
            }
        }
    })
})

// Post Data
app.post("/api", (req,res)=>{
    let product = new Products({
        imgUrl:req.body.imgUrl,
        title:req.body.title,
        name:req.body.name,
        price:req.body.price,
    })
    product.save()
    res.send("Success")
})  
//Delete Data
app.delete("/api/:id", (req,res)=>{
    const {id} = req.params;
    Products.findByIdAndDelete(id,(err,doc)=>{
        if(!err){
            res.send("Success")
        }else{
            res.status(404).json({message: err})
        }
    })
})

mongoose.set('strictQuery', true);
mongoose.connect(process.env.CONNECT_URL)
.then(()=> console.log("DB Connected"))
.catch(()=>console.log("DB could not connected"))
app.listen(process.env.PORT, console.log("Server Started"))