import Image from "next/image";
import styles from "./page.module.css";
import CarCard from "./components/carCard/carCard";
import Cars from "./components/cars/Cars";
import { Suspense } from "react";

export default function Home() {
	return (
		<section className={styles.main}>
			<Suspense fallback={<div>todo:skeleton</div>}>
				<Cars />
			</Suspense>
		</section>
	);
}
