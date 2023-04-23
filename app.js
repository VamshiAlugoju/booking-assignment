const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors")
const sequelize = require("./util/database");
const app = express();

const routes = require("./routes/users");


app.use(bodyParser.json({extended:true}));
app.use(cors());
app.use(routes);



sequelize.sync()
.then(res=>{
    console.log("connected to database")
})
.catch(err=>{
    console.log(err)
})

app.listen(5000,()=>{
    console.log("connected to port")
})