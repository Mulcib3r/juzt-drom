import axios from "axios";
import { Car } from "../models/drom";

const BASE_URL = "http://localhost:3333";

export async function getCars() {
	try {
		const response = await axios.get<Car[]>("/cars", {
			baseURL: BASE_URL,
		});
		return response.data;
	} catch (error) {
		throw new Error(`Fail with ${error}`);
	}
}

export async function getCarById(id: number) {
	try {
		const response = await axios.get<Car>(`/cars/${id}`, {
			baseURL: BASE_URL,
		});
		return response.data;
	} catch (error) {
		throw new Error(`Fail with ${error}`);
	}
}
