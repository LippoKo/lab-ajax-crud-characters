class APIHandler {
	constructor(baseUrl) {
		this.BASE_URL = baseUrl;
		this.api = axios.create({
			baseURL: this.BASE_URL,
		});
	}

	getFullList() {
		return this.api.get("/characters");
	}

	getOneRegister(id) {
		return this.api.get(`/characters/${id}`);
	}

	createOneRegister() {
		return this.api.post(`/characters`, character);
	}

	updateOneRegister(id) {
		return this.api.put(`/characters/${id}`, updatedInfo);
	}

	deleteOneRegister(id) {
		return this.api.delete(`/characters/${id}`);
	}
}
