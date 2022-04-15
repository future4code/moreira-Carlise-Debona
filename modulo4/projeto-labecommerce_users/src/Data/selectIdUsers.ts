import  connection  from './connections';

export default async function getIdUser(id : string): Promise<any> {
  const result = await connection.raw(`
  SELECT id FROM labecommerce_users WHERE id = '${id}'`);
  return result[0]
  }