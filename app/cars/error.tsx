"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Error() {
	return (
		<>
			<h2>Something went wrong!</h2>
			<Link href="/cars">Go back</Link>
		</>
	);
}
