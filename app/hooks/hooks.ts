import { usePathname, useSearchParams } from "next/navigation";

export const usePagination = () => {
	const pathname = usePathname();
	const searchParams = useSearchParams();
	const currentPage = Number(searchParams.get("page")) || 1;
	const createPageURL = (pageNumber: number) => {
		const params = new URLSearchParams(searchParams);
		params.set("page", pageNumber.toString());
		return `${pathname}?${params.toString()}`;
	};

	return {
		currentPage,
		createPageURL,
	};
};

export const useReverseByCost = () => {
	const pathname = usePathname();
	const searchParams = useSearchParams();
	const currentQuery = searchParams.get("query") || "common";
	const createQuery = (query: string) => {
		const params = new URLSearchParams(searchParams);
		params.set("query", query);
		return `${pathname}?${params}`;
	};

	return {
		createQuery,
		currentQuery,
	};
};
