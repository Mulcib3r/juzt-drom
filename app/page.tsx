import CarForm from "./components/newCarForm/newCarForm";
import styles from "./page.module.css";
export default function Home() {
	return (
		<div>
			<h2 className={styles.title}>Add new car</h2>
			<CarForm />
		</div>
	);
}
