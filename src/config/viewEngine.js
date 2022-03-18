import express from 'express';

let configViewEngine = (app) =>{
    //cau hinh duong link public
    app.use(express.static("./src/public"));
    //cho phep go logic trong file html (if..else,vvv..)
    app.set("view engine","ejs");
    //set duong link lay file view engine
    app.set("views","./src/views");
}


module.exports = configViewEngine;