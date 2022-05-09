import { UserDatabase } from "./data/userDatabase";
import { UserBusiness } from "./userBusiness/userBusiness";
import  app  from "./userController/app";
import { UserController } from "./userController/userController";

const userBusiness = new UserBusiness(new UserDatabase)

const userController = new UserController(userBusiness);


// criar usuário
app.post("/user/signup", userController.signup)

// Login
app.post("/login",userController.login )