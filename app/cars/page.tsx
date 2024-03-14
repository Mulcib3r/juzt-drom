import { Suspense } from "react";
import Cars from "../components/carsWrapper/CarsWrapper";
import Pagination from "../components/pagination/Pagination";
import { getTotalPages } from "../services/dromApi";
import styles from "./page.module.css";
import CarsWrapper from "../components/carsWrapper/CarsWrapper";

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
				<CarsWrapper currentPage={currentPage} />
				<Pagination totalPages={totalPages} />
			</Suspense>
		</div>
	);
}
