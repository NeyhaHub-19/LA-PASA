const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const fileUpload = require('express-fileupload');
dotenv.config();
const product = require('./routes/product');
const upload = require('./routes/upload');
const user = require("./routes/user");
const category = require("./routes/category");
const videoUpload = require("./routes/uploadVideo");
const recipe = require("./routes/recipe");
const uploadUserImage = require("./routes/uploadUserImage");
const app = express()
app.use(morgan('dev'))
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: "http://localhost:3000", // Replace with your frontend domain
    credentials: true, 
    exposedHeaders: ["set-cookie"]// Allow cookies to be sent with requests
}));
app.use(fileUpload({
    useTempFiles: true
}))


app.use("/api",product);
app.use("/api",upload);
app.use("/api", user);
app.use("/api", category);
app.use("/api", videoUpload);
app.use("/api", recipe);
app.use("/api",uploadUserImage)


try {
    mongoose.set('strictQuery', false)
    mongoose.connect(process.env.DBCONNECTION) 
    console.log('Mongo connected')
}
catch(error) {
    console.log(error)
    process.exit()
}

const port = process.env.PORT || 8000

app.listen(port, () =>{
    console.log('server is running on', port)
})