import { getCars } from "@/app/services/dromApi";
import CarCard from "../carCard/carCard";

export default async function Cars() {
	const { cars } = await getCars();

	return (
		<>
			{cars.map((car) => (
				<CarCard
					key={car.make_ID}
					make={car.make_Name}
					model={car.model_Name}
				/>
			))}
		</>
	);
}
