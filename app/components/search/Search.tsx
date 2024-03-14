"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { useDebouncedCallback } from "use-debounce";
import styles from "./search.module.css";

export default function Search() {
	const searchParams = useSearchParams();
	const pathname = usePathname();
	const { replace } = useRouter();

	const handleSearch = useDebouncedCallback((draft: string) => {
		const params = new URLSearchParams(searchParams);
		params.set("page", "1");
		if (draft) {
			params.set("query", draft);
		} else {
			params.delete("query");
		}
		replace(`${pathname}?${params.toString()}`);
	}, 300);
	return (
		<div className={styles.search}>
			<input
				onChange={(e) => handleSearch(e.target.value)}
				type="text"
				placeholder="color or brand"
				defaultValue={searchParams.get("query")?.toString()}
			/>
		</div>
	);
}
