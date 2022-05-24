import { app } from "./app"

import { createAdress }  from './endpoints/createAdress';


app.post('/create', createAdress);