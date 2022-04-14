import { app } from "./app"

import { createAdress }  from './endepoints/createAdress';


app.post('/create', createAdress);