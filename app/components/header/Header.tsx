import React from "react";
import Navbar from "../navbar/Navbar";
import styles from "./header.module.css";

export default function Header() {
	return (
		<header className={styles.header}>
			<Navbar />
		</header>
	);
}
