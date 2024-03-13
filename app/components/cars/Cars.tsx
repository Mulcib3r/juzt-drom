import { getCars } from "@/app/services/dromApi";
import CarCard from "../carCard/carCard";
import styles from "./cars.module.css";

export default async function Cars({ currentPage }: { currentPage: number }) {
	let vechs = await getCars(currentPage);
	return (
		<div className={styles.cars}>
			{vechs.map((vech) => (
				<CarCard
					key={vech.id}
					vech={vech}
				/>
			))}
		</div>
	);
}