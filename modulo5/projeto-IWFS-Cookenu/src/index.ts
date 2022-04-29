import app from "./app"
import { signup }  from "./endepoints/signup";


// Create user
app.post("/user/signup", signup )