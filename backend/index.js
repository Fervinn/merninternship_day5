//STEP 1:import express
const express = require('express')
require("./connection")
var empModel = require("./model/employee")
var cors = require('cors')
//STEP 2:initialize
const app = express()

//mid
app.use(express.json())
app.use(cors())

//STEP 3: api creation
app.get("/", (req, res) => { 
    res.send("Hello, World!")
})
app.get("/trial", (req, res) => {
    res.send("This is a trial message")
})
//add api
app.post("/add", async (req, res) => {
    try {
        await empModel(req.body).save()
        res.send({message:"data added"})
    } catch (error) {
        console.log(error)

    }
})
//VIEW API
app.get("/view", async (req, res) => { 
    try { 
        var data = await empModel.find()
        res.send(data)
    } catch (error) {
        console.log(error)

    }
})
//delete api
app.delete("/remove/:id", async (req, res) => {
    try {
        await empModel.findByIdAndDelete(req.params.id)
        res.send({message:"data deleted"})
    } catch (error) {
        console.log(error)
    }
})
//update api
app.put("/update/:id", async (req, res) => {
    try {
        await empModel.findByIdAndUpdate(req.params.id, req.body)
        res.send({message:"data updated"})
    } catch (error) {
        console.log(error)
    }
})
//STEP4:port setting
app.listen(3004, () => {
    console.log('server is running on port 3004')
})