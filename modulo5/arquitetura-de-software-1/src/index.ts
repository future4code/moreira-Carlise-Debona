import  app  from "./controller/app";
import { UserController } from "./controller/userController";


app.post("/signup", new UserController().signup)
app.post("/user/login", new UserController().login)
app.get("/all", new UserController().getAllUsers)
app.delete("/user/:id", new UserController().delete)