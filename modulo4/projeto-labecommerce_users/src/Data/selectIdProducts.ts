import  connection  from './connections';

export default async function getIdProduct(id : string): Promise<any> {
  const result = await connection.raw(`
  SELECT id FROM labecommerce_products WHERE id = '${id}';`);
  return result[0]
  }
