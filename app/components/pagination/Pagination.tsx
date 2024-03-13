"use client";

import PaginationArrow from "../paginationArrow/PaginationArrow";
import styles from "./pagination.module.css";
import { usePagination } from "@/app/hooks/hooks";

export default function Pagination({ totalPages }: { totalPages: number }) {
	const { currentPage, createPageURL } = usePagination();
	return (
		<div className={styles.pagination}>
			<PaginationArrow
				direction="left"
				href={createPageURL(currentPage - 1)}
				isDisabled={currentPage <= 1}
			/>
			{currentPage}
			<PaginationArrow
				direction="right"
				href={createPageURL(currentPage + 1)}
				isDisabled={currentPage >= totalPages}
			/>
		</div>
	);
}
