export interface Response {
	count: number;
	message: string;
	searchCriteria: string;
	cars: Car[];
}

export interface Car {
	make_ID: number;
	make_Name: string;
	model_ID: number;
	model_Name: string;
}
