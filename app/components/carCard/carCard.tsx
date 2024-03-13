import Image from "next/image";
import styles from "./carCard.module.css";

interface Props {
	make: string;
	model: string;
}

export default function CarCard({ make, model }: Props) {
	return (
		<div className={styles.carCard}>
			<div className={styles.carCard_img}>
				<Image
					src="https://www.svgrepo.com/show/332266/car.svg"
					width="200"
					height="200"
					alt="car"
				/>
			</div>
			<div className={styles.carCard_info}>
				<p>{make}</p>
				<p>{model}</p>
			</div>
		</div>
	);
}
