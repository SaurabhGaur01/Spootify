import axios from 'axios';
import qs from 'querystring';
import config from '../../../config';

const { api } = config;

const makeRequest = async (path) => {
  try{
    const { data: { access_token: token } } = await axios.post(
      api.authUrl,
      qs.stringify({ 'grant_type': 'client_credentials' }),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: `Basic ${btoa(`${api.clientId}:${api.clientSecret}`)}`
        }
      }
    );
  
    const res = await axios.get(
      `${api.baseUrl}/browse/${path}?locale=en_US`,
      {  headers: { Authorization: `Bearer ${token}` } }
    );
  
    return res;
  } catch (error) {
    // handling errors gracefully if any api fails so that UI will remain clean for endusers
    return {
      name: path,
      status: 'fail',
    };
  }
}

export default makeRequest;
