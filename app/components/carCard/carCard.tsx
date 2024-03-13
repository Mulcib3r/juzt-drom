import Image from "next/image";
import styles from "./carCard.module.css";
import { Car } from "@/app/models/drom";
import Link from "next/link";

export default function CarCard({ vech }: { vech: Car }) {
	return (
		<div className={styles.carCard}>
			<div className={styles.carCard_img}>
				<Link href={`cars/${vech.id}`}>
					<Image
						src="https://www.svgrepo.com/show/332266/car.svg"
						width="200"
						height="200"
						alt="car"
					/>
				</Link>
			</div>
			<div className={styles.carCard_info}>
				<p>{vech.brand}</p>
				<p>{vech.model}</p>
				<p>{vech.year}</p>
			</div>
		</div>
	);
}
