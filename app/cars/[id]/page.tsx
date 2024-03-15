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
				{!car.image ? (
					<Image
						src="https://www.svgrepo.com/show/332266/car.svg"
						width="200"
						height="200"
						alt="car"
					/>
				) : (
					<Image
						src={car.image}
						width="200"
						height="200"
						alt="car"
					/>
				)}
			</div>

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
