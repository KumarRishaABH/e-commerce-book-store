console.log("Hello World!!");
const express = require('express');
const mongoose = require('mongoose');
const router = require("./routes/book-routes");
const app = express();
const cors = require("cors");
//Middleware 
app.use(express.json());
app.use(cors());
app.use("/books",router);
mongoose.connect(
  "mongodb+srv://admin:eTSbPOuhQimMtro9@cluster0.haeuq.mongodb.net/bookStore?retryWrites=true&w=majority"
)
.then(()=>console.log("Connected To Database"))
    .then(()=>{
        app.listen(8000)
    }).catch((err)=> console.log(err));


//eTSbPOuhQimMtro9