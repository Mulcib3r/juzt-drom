"use client";
import { Car } from "@/app/models/drom";
import CarCard from "../carCard/carCard";
import styles from "./cars.module.css";
import { useState } from "react";
import { ArrowDown01, ArrowUp10 } from "lucide-react";

export default function Cars({ vechs }: { vechs: Car[] }) {
	const [carsState, setCarsState] = useState(vechs);

	const sortedByYearDownToUp = () => {
		setCarsState((prev) => [
			...prev.sort((car1, car2) => Number(car1.year) - Number(car2.year)),
		]);
	};

	const sortedByYearUpToDown = () => {
		setCarsState((prev) => [
			...prev.sort((car1, car2) => Number(car2.year) - Number(car1.year)),
		]);
	};

	return (
		<div className={styles.cars_content}>
			<div className={styles.cars_filterContainer}>
				<div
					className={styles.cars_filter}
					onClick={sortedByYearDownToUp}
				>
					<ArrowDown01 size={100} />
				</div>
				<div
					className={styles.cars_filter}
					onClick={sortedByYearUpToDown}
				>
					<ArrowUp10 size={100} />
				</div>
			</div>
			<div className={styles.cars}>
				{carsState.map((vech) => (
					<CarCard
						key={vech.id}
						vech={vech}
					/>
				))}
			</div>
		</div>
	);
}
