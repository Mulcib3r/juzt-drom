import Pagination from "../components/pagination/Pagination";
import { getTotalPages } from "../services/dromApi";
import styles from "./page.module.css";
import Search from "../components/search/Search";
import { Metadata } from "next";
import Cars from "../components/cars/Cars";

type Props = {
	searchParams?: { page?: string; query?: string; sort?: string };
};

export const metadata: Metadata = {
	title: "Cars | Juzt Drom",
	description: "Cars collection",
};

export default async function CarsPage({ searchParams }: Props) {
	const currentPage = Number(searchParams?.page) || 1;
	const query = searchParams?.query || "";
	const sort = searchParams?.sort || "";
	const totalPages = await getTotalPages();
	return (
		<div className={styles.carsPage}>
			<Search />
			<Cars
				sort={sort}
				query={query}
				currentPage={currentPage}
			/>
			<Pagination totalPages={totalPages} />
		</div>
	);
}
