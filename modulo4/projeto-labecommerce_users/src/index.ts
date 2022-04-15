import { app } from "./app"
import {getAllAUsers} from './endepoints/getAllUsers';
import { createUsers }  from './endepoints/createUsers';
import {createProducts} from './endepoints/createProducts';
import {getAllProducts} from './endepoints/getAllProducts';

app.post('/users', createUsers);
app.get('/users',getAllAUsers);
app.post('/products', createProducts);
app.get('/products', getAllProducts);