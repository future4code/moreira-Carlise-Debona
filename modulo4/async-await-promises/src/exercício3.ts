
import axios from "axios";
import { BASE_URL } from './BASE_URL';


//a) Não vamos ter error.

//b) Sim, mapear os results faz parte de uma boa organização do seu código

type user = {
	id: string;
	name: string;
	email: string;
}

//c)
const getSubscribers = async (): Promise<user[]> => {
  const response = await axios.get(`${BASE_URL}/subscribers`);
  return response.data.map((res: any) => {
    return {
      id: res.id,
      name: res.name,
      email: res.email,
    };
  });
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