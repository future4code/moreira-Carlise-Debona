import { app } from "./app"

import { createUsers }  from './endepoints/createUsers';


app.post('/users', createUsers);