import { Suspense } from "react";
import Cars from "../components/cars/Cars";
import Pagination from "../components/pagination/Pagination";
import { getCars, getTotalPages } from "../services/dromApi";
import styles from "./page.module.css";

export default async function CarsPage({
	searchParams,
}: {
	searchParams?: { page?: string };
}) {
	const currentPage = Number(searchParams?.page) || 1;
	const totalPages = await getTotalPages();
	return (
		<div className={styles.carsPage}>
			<Suspense fallback={<div>todo:skeleton</div>}>
				<Cars currentPage={currentPage} />
				<Pagination totalPages={totalPages} />
			</Suspense>
		</div>
	);
}
