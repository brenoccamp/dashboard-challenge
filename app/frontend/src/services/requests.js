import axios from 'axios';

const API_BASE_URL = 'http://localhost:3001';

const getAllSales = async () => axios.get(`${API_BASE_URL}/dashboard-data/sales`);

const getAllStores = async () => axios.get(`${API_BASE_URL}/dashboard-data/stores`);

export {
  getAllSales,
  getAllStores,
};
