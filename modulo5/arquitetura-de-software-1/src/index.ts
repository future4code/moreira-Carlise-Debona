import  app  from "./controller/app";
import { UserController } from "./controller/userController";


app.post("/signup", new UserController().signup)
app.post("/login", new UserController().login)
app.get("/all", new UserController().getAll)
app.delete("/:id", new UserController().deleteUser)