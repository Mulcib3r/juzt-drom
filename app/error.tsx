"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Error({
	error,
}: {
	error: Error & { digest?: string };
}) {
	useEffect(() => {
		console.error(error);
	}, [error]);

	return (
		<>
			<h2>Something went wrong!</h2>
			<Link href="/cars">Go back</Link>
		</>
	);
}
