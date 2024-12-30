const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://fervin:fervin@cluster0.0whsy.mongodb.net/providence?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => {
        console.log("Connected to MongoDB");
    }
)
    .catch((err) => {
    console.log(err);
})