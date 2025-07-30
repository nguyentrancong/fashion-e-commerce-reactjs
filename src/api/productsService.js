import { axiosClient } from './axiosClient';

export const getProducts = async () => {
  const res = await axiosClient.get('/product');

  console.log(`getProducts: `, res);
  return res.data;
};
