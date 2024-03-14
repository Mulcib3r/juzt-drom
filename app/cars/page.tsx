import { Suspense } from "react";
import Cars from "../components/carsServerWrapper/CarsWrapper";
import Pagination from "../components/pagination/Pagination";
import { getTotalPages } from "../services/dromApi";
import styles from "./page.module.css";
import CarsWrapper from "../components/carsServerWrapper/CarsWrapper";
import Search from "../components/search/Search";

export default async function CarsPage({
	searchParams,
}: {
	searchParams?: { page?: string; query?: string };
}) {
	const currentPage = Number(searchParams?.page) || 1;
	const query = searchParams?.query || "";
	const totalPages = await getTotalPages();
	return (
		<div className={styles.carsPage}>
			<Search />
			<CarsWrapper
				query={query}
				currentPage={currentPage}
			/>
			<Pagination totalPages={totalPages} />
		</div>
	);
}
