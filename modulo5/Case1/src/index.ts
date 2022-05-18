import  app  from "./controller/app";


const userBusiness = new UserBusiness(new UserDatabase)

const userController = new UserController(userBusiness);



app.post("/user/signup", userController.signup)