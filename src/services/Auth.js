import axios from 'axios';
import { base } from './base';


const http = (headers) => {
	return axios.create({ baseURL: base.api, headers });
};

class AuthService {
  login(username, password) {
		const headers = {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': '*'
		};
		const https = http(headers);
		return https.post('login', JSON.stringify({ email: username, password }));
	}
}

export const authServices = new AuthService();
