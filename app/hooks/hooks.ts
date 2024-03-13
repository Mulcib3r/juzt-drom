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
