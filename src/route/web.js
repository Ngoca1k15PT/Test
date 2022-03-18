import express from "express";
import homeController from "../controllers/homeController";
import userController from "../controllers/userController";

let router = express.Router();

let intWebRoutes = (app) =>{
    router.get('/',homeController.getHomePage);
    router.get('/crud',homeController.getCRUD);

    router.post('/post-crud',homeController.postCRUD);//themdl
    router.get('/get-crud',homeController.displayGetCRUD);//xem dlieu
    router.get('/edit-crud',homeController.getEditCRUD);//chinh sua
    router.post('/put-crud',homeController.putCRUD);//chinh sua dl
    router.get('/delete-crud',homeController.deleteCRUD);//xoa

    router.post('/api/login',userController.handleLogin);

    return app.use("/",router)
}

module.exports = intWebRoutes;