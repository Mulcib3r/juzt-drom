"use client";

import { ArrowDown01 } from "lucide-react";
import styles from "./sortedButtons.module.css";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export function SortButtonUp() {
	const searchParams = useSearchParams();
	const { replace } = useRouter();
	const pathname = usePathname();

	const sortedByYearDownToUp = useDebouncedCallback(() => {
		const params = new URLSearchParams(searchParams);
		params.set("sort", "asc");

		replace(`${pathname}?${params.toString()}`);
	}, 200);
	return (
		<div
			className={styles.cars_filterUp}
			onClick={sortedByYearDownToUp}
		>
			<ArrowDown01 size={50} />
		</div>
	);
}
