export type users = {
  id: string;
  name: string;
  email: string;
  password: string;
};

export type products = {
  id: string;
  name: string;
  price: number;
  image_url: string;
};

export type purchase = {
  id: string,
  user_id: string,
  product_id: string,
  quantity: number,
  total_price: number
};