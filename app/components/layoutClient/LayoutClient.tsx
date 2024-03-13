import { PropsWithChildren } from "react";
import styles from "./layout.module.css";
import Header from "../header/Header";

const LayoutClient = ({ children }: PropsWithChildren) => {
	return (
		<>
			<Header />
			<main className={styles.layoutClient}>
				<section className={styles.layoutContent}>{children}</section>
			</main>
		</>
	);
};

export default LayoutClient;
