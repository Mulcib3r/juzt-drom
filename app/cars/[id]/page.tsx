import { getCarById } from "@/app/services/dromApi";
import styles from "./page.module.css";

import Image from "next/image";
import { ArrowBigDown, ArrowBigLeft } from "lucide-react";
import Link from "next/link";

export default async function CarPage({ params }: { params: { id: string } }) {
	const car = await getCarById(params.id);

	return (
		<div className={styles.carPage}>
			<div className={styles.carPage_card}>
				<Image
					src="https://www.svgrepo.com/show/332266/car.svg"
					width="400"
					height="400"
					alt="car"
				/>
			</div>
			<Link
				href="/cars"
				className={styles.carPage_arrow}
			>
				<ArrowBigLeft size={100} />
			</Link>

			<div className={styles.carCard_info}>
				<p>brand: {car.brand}</p>
				<p>model: {car.model}</p>
				<p>year: {car.year}</p>
				<p>body: {car.body}</p>
				<p>color: {car.color}</p>
				<p>engine: {car.engine}</p>
				{car.transmission && <p>transmission: {car.transmission}</p>}
				<p>price: {car.price} RUB</p>
				{car.range && <p>range: {car.range}km</p>}
			</div>
		</div>
	);
}
