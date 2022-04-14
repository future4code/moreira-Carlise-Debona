import axios from "axios";
import { BASE_URL } from './BASE_URL';


//a) Na assinrona vamos subtituir o const por asnync() 

//b) no Arrou usaremos  const getSubscribers = async (): Promise<any> =>

const getSubscribers = async (): Promise<any[]> => {
  const response = await axios.get(`${BASE_URL}/subscribers`);
  return response.data;
};


const main = async (): Promise<void> => {
  try {
    const subscribers = await getSubscribers();
    console.log(subscribers);
  } catch (err: any) {
    console.log(err.response?.data || err.message);
  }
};

main();