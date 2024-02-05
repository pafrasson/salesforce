import axios from "axios";

const instance = axios.create({
  baseURL: 'http://localhost:8080',
  timeout: 5000,
});

export const fetchData = async (endpoint) => {
  try {
    const response = await instance.get(endpoint);
    return response.data;
  } catch (error) {
    console.error('Erro na requisição GET:', error.message);
    throw error;
  }
};

export const sendData = async (endpoint, data) => {
  try {
    const response = await instance.post(endpoint, data);
    return response.data;
  } catch (error) {
    console.error('Erro na requisição POST:', error.message);
    throw error;
  }
};
