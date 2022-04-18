import { app } from "./app"
import {getAllUsers} from './endepoints/getAllUsers';
import { createUsers }  from './endepoints/createUsers';
import {createProducts} from './endepoints/createProducts';
import {getAllProducts} from './endepoints/getAllProducts';
import {createPurchasesUser} from './endepoints/createPurchasesUser'
import {getUserPurchases} from './endepoints/getUserPurchases'

app.post('/users', createUsers);
app.get('/users',getAllUsers);
app.post('/products', createProducts);
app.get('/products', getAllProducts);
app.post('/purchases', createPurchasesUser);
app.get('/users/:user_id/purchases', getUserPurchases)