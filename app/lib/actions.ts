import axios from "axios";

export async function sortCarsByCost(formData: FormData) {
	"use server";

	const { sortByCost } = Object.fromEntries(formData);

	try {
		const response = await axios.get("http://localhost:3333/cars");
	} catch (error) {
		throw new Error(`Fail with ${error}`);
	}
}
