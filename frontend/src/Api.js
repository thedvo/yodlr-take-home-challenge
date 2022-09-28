import axios from 'axios';
const BASE_API_URL = 'http://localhost:3000';

class yodlrAPI {
	static async getUsers() {
		const result = await axios.get(`${BASE_API_URL}/users`);
		return result.data;
	}
	static async getUser(id) {
		const result = await axios.get(`${BASE_API_URL}/users/${id}`);
		return result.data;
	}
	static async addUser(data) {
		const result = await axios.post(`${BASE_API_URL}/users`, {
			firstName: data.firstName,
			lastName: data.lastName,
			email: data.email,
		});
		return result.data;
	}
}

export default yodlrAPI;
