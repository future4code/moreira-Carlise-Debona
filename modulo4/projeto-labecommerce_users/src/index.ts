import { app } from "./app"
import {getAllAUsers} from './endepoints/getAllUsers';
import { createUsers }  from './endepoints/createUsers';


app.post('/users', createUsers);
app.get('/users',getAllAUsers);