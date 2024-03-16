import axios from "axios";
import { Car } from "../models/drom";
import { unstable_noStore as noStore } from "next/cache";
export const BASE_URL = "https://juzt-drom-back-production.up.railway.app/";

export async function getCars(page: number, query: string, sort: string) {
	noStore();
	try {
		const response = await axios.get<Car[]>(
			`/cars?page=${page}&limit=10&keyword=${query}&sort=${sort}`,
			{
				baseURL: BASE_URL,
			}
		);
		return response.data;
	} catch (error) {
		throw new Error(`Fail with ${error}`);
	}
}

export async function getTotalPages() {
	noStore();
	try {
		const response = await axios.get<number>(`/cars/total?limit=10`, {
			baseURL: BASE_URL,
		});
		return response.data;
	} catch (error) {
		throw new Error(`Fail with ${error}`);
	}
}

export async function getCarById(id: string) {
	noStore();
	try {
		const response = await axios.get<Car>(`/cars/${id}`, {
			baseURL: BASE_URL,
		});
		return response.data;
	} catch (error) {
		throw new Error(`Fail with ${error}`);
	}
}
