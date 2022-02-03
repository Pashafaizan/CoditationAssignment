const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require('body-parser')
const { connectToMongoDB } = require("./database/db");
dotenv.config();
const routes = require("./router/routes");

// connect database
connectToMongoDB();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/api/v1", routes);
app.get("/",(req,res)=>{
  res.send("hello start")
})

app.listen(7860, () => {
  console.log("your server has been started");
});
