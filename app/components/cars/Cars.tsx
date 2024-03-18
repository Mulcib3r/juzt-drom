import CarCard from "../carCard/carCard";
import styles from "./cars.module.css";
import { SortButtonDown } from "../sortButton/SortButtonDown";
import { SortButtonUp } from "../sortButton/SortButtonUp";
import { getCars } from "@/app/services/dromApi";

export default async function Cars({
	currentPage,
	query,
	sort,
}: {
	currentPage: number;
	query: string;
	sort: string;
}) {
	let vechs = await getCars(currentPage, query, sort);
	return vechs.length ? (
		<div className={styles.cars_content}>
			<div className={styles.cars_filterContainer}>
				<SortButtonDown />
				<SortButtonUp />
			</div>
			<div className={styles.cars}>
				{vechs.map((vech) => (
					<CarCard
						key={vech.id}
						vech={vech}
					/>
				))}
			</div>
		</div>
	) : (
		<div className={styles.not_found}>not found =(</div>
	);
}
