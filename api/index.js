const cors = require("cors")
const express = require("express")
const App = express()
require('dotenv').config();


App.use(express.json());
App.use(cors())
App.use(express.urlencoded({ extended: false }));


// const mongoose = require("mongoose");

// mongoose.connect("mongodb+srv://Abstract02:Bvdu4321@cluster0.hovn3.mongodb.net/?retryWrites=true&w=majority", {
//     useNewUrlParser: true,
// })
// const connection = mongoose.connection;
// connection.once('open', () => { console.log(`mongo db connected successfully`) })
// const taskSchema = new mongoose.Schema({
//     title: String,
//     completed: Boolean
// })

// const Task = mongoose.model("Task", taskSchema);

App.get("/todos", (req, res) => {
   res.send("All is well");
})

console.log("hell")
const port = process.env.PORT
App.listen(port,()=>{console.log(`Server started at ${port}`)})