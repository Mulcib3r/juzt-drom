import { getCars } from "@/app/services/dromApi";
import Cars from "../cars/Cars";
import styles from "./carsWrapper.module.css";

export default async function CarsServerWrapper({
	currentPage,
	query,
	sort,
}: {
	currentPage: number;
	query: string;
	sort: string;
}) {
	let vechs = await getCars(currentPage, query, sort);

	return (
		<div className={styles.carsServerWrapper}>
			<Cars vechs={vechs} />
		</div>
	);
}
