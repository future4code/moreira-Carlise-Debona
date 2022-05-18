import { PostDatabase } from "./data/postDatabase";
import { UserDatabase } from "./data/userDatabase";
import { PostBusiness } from "./userBusiness/postBusiness";
import { UserBusiness } from "./userBusiness/userBusiness";
import  app  from "./userController/app";
import { GetPostByIdController } from "./userController/getPostByIdController";
import { PostController } from "./userController/postController";
import { UserController } from "./userController/userController";

const userBusiness = new UserBusiness(new UserDatabase)

const userController = new UserController(userBusiness);

const postBusiness = new PostBusiness();

const postController = new PostController(postBusiness)

const getPostByIdController = new GetPostByIdController()

// criar usuário
app.post("/user/signup", userController.signup)

// Login
app.post("/login",userController.login )

// criar post
app.post("/user/post", postController.post)

// buscar post por id
app.get("/post/:id", getPostByIdController.getPostId)