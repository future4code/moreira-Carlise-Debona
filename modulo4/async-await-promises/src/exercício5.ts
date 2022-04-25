import axios from "axios";
import { BASE_URL } from './BASE_URL';


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
		for (const user of users) {
	    await axios.post(`${BASE_URL}/notifications`, {
	      subscriberId: user.id,
	      message
	    });
	  }

	  console.log("All notifications sent");
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