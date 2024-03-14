"use server";
import axios from "axios";
import { BASE_URL } from "../services/dromApi";

export async function addNewCar(formData: FormData) {
	const carData = {
		year: formData.get("year") as string,
		brand: formData.get("brand") as string,
		model: formData.get("model") as string,
		body: formData.get("body") as string,
		color: formData.get("color") as string,
		price: formData.get("price") as string,
		engine: formData.get("engine") as "gas" | "electro" | undefined,
		transmission: formData.get("transmission") as
			| "manual"
			| "automatic"
			| undefined,
		range: formData.get("range") as string | undefined,
		picture: formData.get("image") as File | undefined,
	};

	try {
		const response = await axios.post(`${BASE_URL}/cars`, carData);
	} catch (error) {
		throw new Error(`Failed to create car: ${error}`);
	}
}
