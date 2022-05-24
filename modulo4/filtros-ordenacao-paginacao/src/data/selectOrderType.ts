import { connection } from './connection';


export default async function selectOrderAllUsers():Promise<any> {
  const result = await connection.raw(`
  SELECT * FROM aula48_exercicio ORDER BY type ASC;
  `)

  return result[0]
};