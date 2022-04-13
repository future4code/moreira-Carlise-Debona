import { app } from "./app";
import { getAllRecipes } from "./endpoints/getAllRecipes";
import { getAllUsers } from "./endpoints/getAllUsers";
import { getUserName } from "./endpoints/getUserName";
import { getUserType } from "./endpoints/getUserType";
import { getOrder } from "./endpoints/getOrder";


app.get("/recipes", getAllRecipes);
app.get("/user", getAllUsers);
app.get("/user/name", getUserName);
app.get("/user/:type", getUserType);
app.get("/user/order/:filter", getOrder);
