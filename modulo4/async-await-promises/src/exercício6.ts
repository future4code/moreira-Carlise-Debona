import axios from "axios";
import { BASE_URL } from './BASE_URL';

//a)método que recebe um array de Promises e retorna outra Promise, que resolve em um array de respostas.

//b) ele é mais rápido, pois ele segue a sequencia sem espera o anterior.


type User = {
  id: string;
  name: string;
  email: string;
};

const sendNotifications = async (
  users: User[],
  message: string
): Promise<void> => {

	try {
	  const promises = users.map(user =>{
	    return axios.post(`${BASE_URL}/notifications`, {
	      subscriberId: user.id,
	      message: message,
	    })
	  })
	
	  await Promise.all(promises);

	} catch {
		console.log("Error");
	}
};

async function getSubscribers(): Promise<any[]> {
  const response = await axios.get(`${BASE_URL}/subscribers`);
  return response.data;
};

const main = async (): Promise<void> => {
  try {
    const users = await getSubscribers();
    await sendNotifications(users, "message");
   
  } catch (err: any) {
    console.log(err.response?.data || err.message);
  }
};

main();