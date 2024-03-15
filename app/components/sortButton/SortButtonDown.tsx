"use client";

import { ArrowUp01 } from "lucide-react";
import styles from "./sortedButtons.module.css";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export function SortButtonDown() {
	const searchParams = useSearchParams();
	const { replace } = useRouter();
	const pathname = usePathname();

	const sortedByYearUpToDown = useDebouncedCallback(() => {
		const params = new URLSearchParams(searchParams);
		params.set("sort", "desc");

		replace(`${pathname}?${params.toString()}`);
	}, 200);

	return (
		<div
			className={styles.cars_filterDown}
			onClick={sortedByYearUpToDown}
		>
			<ArrowUp01 size={50} />
		</div>
	);
}
