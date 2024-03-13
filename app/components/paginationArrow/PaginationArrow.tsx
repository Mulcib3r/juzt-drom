import { ArrowBigLeft, ArrowLeftCircle } from "lucide-react";
import styles from "./paginationArrow.module.css";
import clsx from "clsx";
import Link from "next/link";
export default function PaginationArrow({
	direction,
	href,
	isDisabled,
}: {
	direction: string;
	href: string;
	isDisabled: boolean;
}) {
	const icon =
		direction === "left" ? (
			<ArrowLeftCircle />
		) : (
			<ArrowLeftCircle className={styles.rotate} />
		);
	const className = clsx(styles.arrow, {
		[styles.arrowOff]: isDisabled,
	});

	return isDisabled ? (
		<div className={className}>{icon}</div>
	) : (
		<Link
			className={className}
			href={href}
		>
			{icon}
		</Link>
	);
}
