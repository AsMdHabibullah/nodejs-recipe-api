const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const bodyParser = require("body-parser")
const routers = require("./api/routers")


const app = express()


//  Data attached with user request from db
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())


// Controle all router
app.use("/api", routers);

// Development Logers
app.use(morgan("dev"));

// Home page router or main router
app.get("/", (req, res) => {
    res.json({
        message: "Welcome to Coursera Full-Stack Developmenrt Courde!"
    })
})


const HOST = "localhost"

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Server is running host and port on: " + HOST + ":" + PORT);
    mongoose.connect('mongodb://localhost/coursera',
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        },
        () => {
            console.log("Database connect!");
        });
})