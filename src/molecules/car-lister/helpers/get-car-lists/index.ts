import { API_BASE_PATH } from '~/apis';

export default async() => {
  const URL = `${API_BASE_PATH}/vehicles`;
  const response = await fetch(URL, { method: 'GET' , headers: { 'Content-Type': 'application/json' }});
  return await response.json();
};
