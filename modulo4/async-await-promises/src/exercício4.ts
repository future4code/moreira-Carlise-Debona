import axios from "axios";
import { BASE_URL } from './BASE_URL';

//a) async é o tipo e put o endpoint.

//b) 

async function createNews(
  title: string,
  content: string,
  date: number
): Promise<void> {
  await axios.put(`${BASE_URL}/news`, {
    title: title,
    content: content, 
    date: date
  });
}
