"use server";
import axios from "axios";
import { BASE_URL } from "../services/dromApi";
import { carSchema } from "../components/newCarForm/schema";
import { Car } from "../models/drom";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function addNewCar(formData: FormData) {
	try {
		const data = {
			year: formData.get("year"),
			brand: formData.get("brand"),
			model: formData.get("model"),
			body: formData.get("body"),
			color: formData.get("color"),
			price: formData.get("price"),
			engine: formData.get("engine"),
			transmission: formData.get("transmission") ?? "",
			range: formData.get("range") ?? "",
			picture: "",
		};
		const validateData = carSchema.parse(data);
		const response = await axios.post<Car>(
			`${BASE_URL}/cars`,
			validateData
		);
	} catch (error) {
		throw new Error(`Failed to create car: ${error}`);
	}
	revalidatePath(`${BASE_URL}/cars`);
	redirect(`${BASE_URL}/cars`);
}
