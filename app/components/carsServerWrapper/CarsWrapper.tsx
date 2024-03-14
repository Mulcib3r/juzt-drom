import { getCars } from "@/app/services/dromApi";
import Cars from "../cars/Cars";
import styles from "./carsWrapper.module.css";

export default async function carsServerWrapper({
	currentPage,
	query,
}: {
	currentPage: number;
	query: string;
}) {
	let vechs = await getCars(currentPage, query);

	return (
		<div className={styles.carsServerWrapper}>
			<Cars vechs={vechs} />
		</div>
	);
}
