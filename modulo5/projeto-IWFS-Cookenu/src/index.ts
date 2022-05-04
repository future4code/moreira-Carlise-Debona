import app from "./app"
import { signup }  from "./endepoints/signup";
import { login } from "./endepoints/login";
import { getUser } from "./endepoints/getUser";
import { createRecipe } from "./endepoints/criarReceitas";
import { getRecipes } from "./endepoints/getRecipe";

// Create user
app.post("/user/signup", signup )

// Login
app.post("/user/login", login )

// Buscar dados do usuário
app.get("/user/:id", getUser )

// Criar receitas
app.post("/user/recipe/:id", createRecipe )

// Buscar dados do usuário
app.get("/recipe/:id", getRecipes )