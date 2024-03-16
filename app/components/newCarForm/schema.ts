import { z } from "zod";

export const carSchema = z.object({
	year: z.string().regex(/^\d+$/),
	brand: z.string(),
	model: z.string(),
	body: z.string(),
	color: z.string().regex(/^[A-Za-z]+$/),
	price: z.string().regex(/^\d+$/),
	engine: z.string(),
	transmission: z.string().optional(),
	range: z.string().optional(),
	picture: z.any(),
});
