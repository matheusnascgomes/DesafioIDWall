import { create } from 'apisauce';

const api = create({ 
    baseURL: 'https://iddog-api.now.sh/',
    headers: { 'Content-Type': 'application/json' }
 });

 api.addResponseTransform(response => {
    if (!response.ok) throw response;
  });

 export default api;