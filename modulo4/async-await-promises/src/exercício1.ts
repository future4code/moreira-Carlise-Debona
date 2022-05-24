import axios from "axios";
import { BASE_URL } from './BASE_URL';

//a) usaremos o GET

//b) usaremos o async (async (): Promise<void>)

//c) 
async function getSubscribers(): Promise<any[]> {
  const response = await axios.get(`${BASE_URL}/subscribers`);
  return response.data;
};

const main = async (): Promise<void> => {
  try {
      const subscribers = await getSubscribers()
      console.log(subscribers)
  } catch (error: any) {
      console.log(error.response?.data || error.message)
  } 

}
main();