const express = require("express");
const app = express();
const cors = require('cors')
const port = 3000;
require('dotenv').config()

const taskRoute =require("./routes/taskRoute");
const userRoute =require("./routes/userRoute");

const mongoose = require("mongoose");
require('dotenv').config();
const mongoDB = "mongodb+srv://"+process.env.DB_USER+":"+process.env.DB_PASSWORD+"@"+process.env.DB_SERVER+"/"+process.env.DB_NAME+"?retryWrites=true&w=majority";
async function main() {
  await mongoose.connect(mongoDB);
  //console.log('Conectado con la Base de datos')
}
main().catch(err => console.log(err));

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.json('Servidor arrancado')
})

app.use('/tasks', taskRoute)
app.use('/user', userRoute)

const server = app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

module.exports = { app, server };
