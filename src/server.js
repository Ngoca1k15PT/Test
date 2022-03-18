import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import initWebRoutes from "./route/web";
import connectDB from "./config/connectDB";
import cors from "cors";

require('dotenv').config();


let app = express();
app.use(cors({origin: true}));

//config app

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


viewEngine(app);
initWebRoutes(app);

connectDB();

//set cong, neu port === undefined => port = 9400
let port = process.env.PORT || 9400;

app.listen(port,()=>{
    console.log("server chay thanh cong tren cong :" + port);
});