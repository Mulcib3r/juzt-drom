import Pagination from "../components/pagination/Pagination";
import { getTotalPages } from "../services/dromApi";
import styles from "./page.module.css";
import Search from "../components/search/Search";

import CarsServerWrapper from "../components/carsServerWrapper/CarsWrapper";

export default async function CarsPage({
	searchParams,
}: {
	searchParams?: { page?: string; query?: string; sort?: string };
}) {
	const currentPage = Number(searchParams?.page) || 1;
	const query = searchParams?.query || "";
	const sort = searchParams?.sort || "";
	const totalPages = await getTotalPages();
	return (
		<div className={styles.carsPage}>
			<Search />

			<CarsServerWrapper
				sort={sort}
				query={query}
				currentPage={currentPage}
			/>
			<Pagination totalPages={totalPages} />
		</div>
	);
}
